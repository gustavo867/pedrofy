import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #13131a;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${height * 0.05}px;
`;

export const AlbumCover = styled.Image`
  border-radius: 8px;
  width: ${width * 0.7}px;
  height: ${height * 0.45}px;
  background-color: rgba(113, 89, 193, 0.7);
  elevation: 2;
`;

export const Controls = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: ${width * 0.5}px;
  margin-top: 40px;
`;

export const Control = styled.TouchableOpacity``;

export const SlideControl = styled.Slider`
  width: ${width * 0.8}px;
  margin-top: 30px;
`;
