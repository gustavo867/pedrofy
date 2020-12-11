import React, { useCallback, useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { getStatus, handlePlayPause, loadAudio, onValueChange } from "./utils";
import {
  Dimensions,
  FlatList,
  LogBox,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PlayerHeader from "./components/PlayerHeader";
import * as S from "./styles";

const { width } = Dimensions.get("window");

interface Music {
  id: number;
  title: string;
  alias: string;
  uri: any;
  image: string;
}

interface RouteProps {
  index: number;
  musics: Music[];
}

const Player: React.FC = () => {
  const [time, setTime] = useState({
    position: 0,
    timeLeft: 0,
    durationTime: "",
    positionTime: "",
    remainTime: "",
  });

  const [audio, setAudio] = useState({
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const soundObject = useRef(new Audio.Sound()).current;
  const flatlistRef = useRef<FlatList<any>>(null);

  const route = useRoute();

  const { index, musics } = route.params as RouteProps;

  async function load(index = 0) {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: false,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
        playThroughEarpieceAndroid: false,
      });
      await loadAudio(soundObject, setAudio, audio, musics[index].uri);
      const interval = setInterval(() => getStatus(soundObject, setTime), 1000);
    } catch (e) {
      console.log(e);
    }
  }

  const skipNextTrack = useCallback(async () => {
    if (flatlistRef.current) {
      if (currentIndex !== musics.length) {
        await setCurrentIndex((state) => state + 1);
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: currentIndex + 1,
        });
        await soundObject.unloadAsync();
        await load(currentIndex + 1);
      } else {
        return;
      }
    }
  }, [flatlistRef, currentIndex]);

  const backTrack = useCallback(async () => {
    if (flatlistRef.current) {
      if (currentIndex !== 0) {
        await setCurrentIndex((state) => state - 1);
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: currentIndex - 1,
        });
        await soundObject.unloadAsync();
        await load(currentIndex - 1);
      } else {
        return;
      }
    }
  }, [flatlistRef, currentIndex]);

  useEffect(() => {
    LogBox.ignoreAllLogs();
    setCurrentIndex(index);
    load(index);
  }, []);

  const handleScroll = useCallback(
    async (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(
        (event.nativeEvent.contentOffset.x / width) * 0.9
      );

      if (index !== currentIndex && index <= musics.length - 1) {
        await setCurrentIndex(index);
        await soundObject.unloadAsync();
        await load(index);
      }
    },
    [currentIndex]
  );

  const { goBack } = useNavigation();

  const handleBack = useCallback(async () => {
    await soundObject.stopAsync();
    await soundObject.unloadAsync();

    goBack();
  }, [goBack]);

  return (
    <S.Container>
      <PlayerHeader
        currentMusic={musics[currentIndex].alias}
        liked={false}
        handleBack={handleBack}
      />
      <S.ItemContainer>
        <FlatList
          ref={flatlistRef}
          data={musics}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <S.AlbumContainer>
              <S.AlbumCover source={{ uri: item.image }} />
            </S.AlbumContainer>
          )}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          snapToInterval={width}
          decelerationRate="fast"
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          initialScrollIndex={currentIndex}
        />
        <S.MusicName>{musics[currentIndex].title}</S.MusicName>
        <S.ArtistName>{musics[currentIndex].alias}</S.ArtistName>
        <S.Center>
          <S.SlideControl
            minimumValue={1}
            maximumValue={1000}
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="rgba(255, 244, 244, 1)"
            step={1}
            value={time.position}
            onValueChange={(value) =>
              onValueChange(value, soundObject, setTime, time)
            }
            thumbTintColor="#FFF"
          />
          <S.Controls>
            <S.Control onPress={backTrack}>
              <Ionicons name="md-skip-backward" size={30} color="#ffffff" />
            </S.Control>
            <S.PlayPause
              onPress={() => handlePlayPause(audio, soundObject, setAudio)}
            >
              {audio.isPlaying ? (
                <Ionicons
                  name="ios-pause"
                  size={38}
                  color="#000"
                  style={{
                    alignSelf: "center",
                  }}
                />
              ) : (
                <Ionicons
                  name="ios-play"
                  size={40}
                  color="#000"
                  style={{
                    marginLeft: 5,
                  }}
                />
              )}
            </S.PlayPause>
            <S.Control onPress={skipNextTrack}>
              <Ionicons name="md-skip-forward" size={30} color="#ffffff" />
            </S.Control>
          </S.Controls>
        </S.Center>
      </S.ItemContainer>
    </S.Container>
  );
};

export default Player;
