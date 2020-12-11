import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  width: ${width * 0.5}px;
  height: ${height * 0.4}px;
  border-radius: 3px;
  margin-right: 30px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 200px;
  height: 200px;
  border-radius: 3px;
`;

export const MusicName = styled.Text`
  font-size: 13px;
  margin-top: 10px;
  font-weight: 400;
  color: rgba(255, 244, 244, 0.6);
`;

export const ArtistName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`;

export const Info = styled.Text`
  font-size: 17px;
  margin-top: 10px;
  font-weight: 400;
  color: rgba(255, 244, 244, 0.6);
`;

export const Button = styled.TouchableOpacity``;
