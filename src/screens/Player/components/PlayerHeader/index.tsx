import React from "react";
import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";

interface Props {
  currentMusic: string;
  liked: boolean;
}

const PlayerHeader: React.FC<Props> = ({ currentMusic, liked }) => {
  return (
    <S.Container>
      <S.Button>
        <Ionicons name="md-arrow-back" size={24} color="#FFF" />
      </S.Button>
      <S.MusicTitle>{currentMusic}</S.MusicTitle>
      <S.Button>
        <Ionicons
          name={liked ? "ios-heart" : "ios-heart-empty"}
          size={30}
          color={liked ? "red" : "rgba(255, 255, 244, 0.85)"}
        />
      </S.Button>
    </S.Container>
  );
};

export default PlayerHeader;
