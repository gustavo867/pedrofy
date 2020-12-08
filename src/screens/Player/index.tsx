import React, { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { getStatus, handlePlayPause, loadAudio, onValueChange } from "./utils";
import { LogBox } from "react-native";

import * as S from "./styles";
import PlayerHeader from "./components/PlayerHeader";

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

  const soundObject = useRef(new Audio.Sound()).current;

  useEffect(() => {
    async function load() {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          shouldDuckAndroid: true,
          staysActiveInBackground: false,
          playThroughEarpieceAndroid: false,
        });
        await loadAudio(soundObject, setAudio, audio);
        const interval = setInterval(
          () => getStatus(soundObject, setTime),
          1000
        );
      } catch (e) {
        console.log(e);
      }
    }

    LogBox.ignoreAllLogs();

    load();
  }, []);

  return (
    <S.Container>
      <PlayerHeader currentMusic="Matue" liked={false} />
      <S.Center>
        <S.AlbumCover
          source={{
            uri: "https://i.ytimg.com/vi/5jx1avs7z5c/maxresdefault.jpg",
          }}
        />
        <S.Controls>
          <S.Control>
            <Ionicons name="md-skip-backward" size={25} color="#D6DCE6" />
          </S.Control>
          <S.Control
            onPress={() => handlePlayPause(audio, soundObject, setAudio)}
          >
            {audio.isPlaying ? (
              <Ionicons name="ios-pause" size={60} color="#D6DCE6" />
            ) : (
              <Ionicons name="ios-play" size={60} color="#D6DCE6" />
            )}
          </S.Control>
          <S.Control>
            <Ionicons name="md-skip-forward" size={25} color="#D6DCE6" />
          </S.Control>
        </S.Controls>
        <S.SlideControl
          minimumValue={1}
          maximumValue={1000}
          minimumTrackTintColor="#475BB3"
          maximumTrackTintColor="#98AEF0"
          step={1}
          value={time.position}
          onValueChange={(value) =>
            onValueChange(value, soundObject, setTime, time)
          }
          thumbTintColor="#FFF"
        />
      </S.Center>
    </S.Container>
  );
};

export default Player;
