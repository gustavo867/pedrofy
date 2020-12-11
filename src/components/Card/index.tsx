import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

interface Item {
  id: number;
  title: string;
  alias: string;
  uri: any;
  image: string;
  playlist: boolean;
}

interface Music {
  id: number;
  title: string;
  alias: string;
  uri: any;
  image: string;
}

interface CardProps {
  item: Item;
  index: number;
  musics: Music[];
}

const Card: React.FC<CardProps> = ({ item, index, musics }) => {
  const { title, alias, image, uri, playlist } = item;

  const { navigate } = useNavigation();

  const navigatePlayer = useCallback(() => {
    navigate("Player", { index, musics });
  }, []);

  return (
    <S.Container>
      <S.Button onPress={navigatePlayer}>
        <S.Image source={{ uri: image }} />
      </S.Button>
      <S.MusicName>{title}</S.MusicName>
      <S.ArtistName>{alias}</S.ArtistName>
      <S.Info>{playlist ? "Playlist" : ""}</S.Info>
    </S.Container>
  );
};

export default Card;
