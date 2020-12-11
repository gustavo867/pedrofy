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
`;

export const Button = styled.TouchableOpacity``;

export const MusicTitle = styled.Text`
  font-size: 20px;
  letter-spacing: 0.4px;
  color: #fff;
  font-weight: bold;
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 244, 0.6);
  font-weight: 400;
  text-transform: uppercase;
`;
