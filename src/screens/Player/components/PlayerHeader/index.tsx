import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { GestureResponderEvent } from "react-native";

interface Props {
  currentMusic: string;
  liked: boolean;
  handleBack: ((event: GestureResponderEvent) => void) | undefined;
}

const PlayerHeader: React.FC<Props> = ({ currentMusic, liked, handleBack }) => {
  return (
    <S.Container>
      <S.Button onPress={handleBack}>
        <Ionicons name="ios-arrow-down" size={25} color="#FFF" />
      </S.Button>
      <S.Column>
        <S.Info>Playing from playlist</S.Info>
        <S.MusicTitle>{currentMusic}</S.MusicTitle>
      </S.Column>
      <S.Button>
        <Ionicons
          name={liked ? "ios-heart" : "ios-heart-empty"}
          size={25}
          color={liked ? "red" : "rgba(255, 255, 244, 0.85)"}
        />
      </S.Button>
    </S.Container>
  );
};

export default PlayerHeader;
