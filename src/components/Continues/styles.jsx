import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("screen");

export const Container = styled.View`
  background-color: transparent;
`;

export const ContainerCarousel = styled.View`
  height: 5%;
`;

export const Carousel = styled.View``;

export const ContainerItens = styled.View`
  height: 220px;
  width: 120px;
  background-color: #473f3f;
  margin: 5px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 100%;
  height: 70%;
  border-bottom-left-radius: 100px;
`;

export const TextExemple = styled.Text`
  font-size: 20px;
  left: 4px;
  font-family: monospace;
`;
export const TextDescription = styled.Text`
  color: white;
  font-size: 15px;
  left: 4px;
  font-family: monospace;
`;
