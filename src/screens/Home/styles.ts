import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #13131a;
  padding-top: 40px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  bounces: false,
})`
  flex-grow: 0;
  padding-horizontal: 15px;
  margin-top: 30px;
`;

export const CardList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  bounces: false,
})`
  flex-grow: 0;
  margin-top: 30px;
`;

export const ItemContainer = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const ArtistImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const InfoTop = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 244, 244, 0.6);
  text-transform: uppercase;
`;
