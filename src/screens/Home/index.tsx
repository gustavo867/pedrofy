import React from "react";
import Card from "../../components/Card";
import { artists } from "../../utils";

import * as S from "./styles";

interface Item {
  id: number;
  name: string;
  followers: number;
  likes: number;
  image: string;
  musics: {
    id: number;
    title: string;
    alias: string;
    uri: any;
    image: string;
  }[];
}

const Home: React.FC = () => {
  const Item = (item: Item) => {
    const musics = item.musics;
    return (
      <S.ItemContainer>
        <S.Row>
          <S.ArtistImage source={{ uri: item.image }} />
          <S.Column>
            <S.InfoTop>For fans of</S.InfoTop>
            <S.Title>{item.name}</S.Title>
          </S.Column>
        </S.Row>
        <S.CardList
          data={musics}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item, index }: any) => (
            <Card item={item} index={index} musics={musics} />
          )}
          alwaysBounceHorizontal={false}
        />
      </S.ItemContainer>
    );
  };

  return (
    <S.Container>
      <S.List
        data={artists}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => <Item {...item} />}
      />
    </S.Container>
  );
};

export default Home;
