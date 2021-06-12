import React from "react";
import { View, Text, FlatList } from "react-native";
import {
  Container,
  ContainerCarousel,
  Carousel,
  ContainerItens,
  Image,
  TextExemple,TextDescription
} from "./styles";

export default function Continues({ title }) {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Container>
      <ContainerCarousel>
        <Carousel list={list} />
      </ContainerCarousel>
      {title && <TextExemple>{title}</TextExemple>}
      <FlatList
        data={list}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        renderItem={({ item }) => {
          return (
            <ContainerItens>
              <Image
                source={{
                  uri: "https://img.redbull.com/images/c_crop,x_491,y_0,h_1280,w_1493/c_fill,w_650,h_540/q_auto,f_auto/redbullcom/2019/01/10/30651cde-bd71-4b46-ab11-d1441bb4f9d3/teoria-game-of-thrones-baseado-em-naruto-01",
                }}
              />
              <TextDescription>Game Of Thrones 1 Temporada</TextDescription>
            </ContainerItens>
          );
        }}
      />
    </Container>
  );
}
