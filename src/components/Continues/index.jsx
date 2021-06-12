import React, { useState, useEffect, useImperativeHandle } from "react";
import { View, Text, FlatList } from "react-native";
import {
  Container,
  ContainerCarousel,
  Carousel,
  ContainerItens,
  Image,
  TextExemple,
  TextDescription,
} from "./styles";
import api from "../../services/api";
export default function Continues({ title }) {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [latest, setLatest] = useState([]);

  const apiKey = "api_key=2084a00f95fb3e4737567fae4e38ed85";

  const isMovies = async () => {
    const response = await api.get(
      `trending/movie/week?${apiKey}&language=en-US`
    
      );
    setLatest(response.data.results);
   // console.log(response);
  };
  useEffect(() => {
    isMovies();
  }, []);

  return (
    <>
      <Container>
        <ContainerCarousel>
          <Carousel list={latest} />
        </ContainerCarousel>

        <TextExemple>{title}</TextExemple>

        <FlatList
          data={list}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          renderItem={({ dados }) => {
            const poster_path;
            
            const uri = `https://image.tmdb.org/t/p/w342/${dados.poster_path}`;

            console.log(uri);

            return (
              <ContainerItens>
                <Image
                  source={{
                    uri,
                  }}
                />
                <TextDescription>Game Of Thrones 1 Temporada</TextDescription>
              </ContainerItens>
            );
          }}
        />
      </Container>
    </>
  );
}
