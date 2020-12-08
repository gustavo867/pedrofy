import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  height: ${height * 0.13}px;
  width: ${width}px;
  padding-horizontal: 20px;
  padding-top: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #13131a;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.5);
`;

export const Button = styled.TouchableOpacity``;

export const MusicTitle = styled.Text`
  font-size: 24px;
  letter-spacing: 0.4px;
  color: rgba(255, 255, 244, 0.6);
  font-weight: 400;
`;
