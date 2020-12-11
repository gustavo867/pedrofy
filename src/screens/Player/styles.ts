import { Dimensions, Animated } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #13131a;
`;

export const ItemContainer = styled.View`
  margin-top: ${height * 0.02}px;
  width: ${width}px;
  padding-top: 10px;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AlbumContainer = styled.View`
  width: ${width}px;
  height: ${height * 0.48}px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AlbumCover = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.4}px;
  background-color: rgba(113, 89, 193, 0.7);
  align-self: center;
`;

export const Controls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${width * 0.5}px;
  margin-top: 20px;
`;

export const PlayPause = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const Control = styled.TouchableOpacity``;

export const SlideControl = styled.Slider`
  width: ${width * 0.9}px;
  margin-top: 20px;
`;

export const MusicName = styled.Text`
  margin-top: ${height * 0.025}px;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.4px;
  margin-left: 30px;
`;

export const ArtistName = styled.Text`
  color: rgba(255, 244, 244, 0.7);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.2px;
  margin-left: 30px;
`;
