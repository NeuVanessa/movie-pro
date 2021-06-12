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
export default function DubbedMovie({ title }) {
  //const lists = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [latest, setLatest] = useState([]);

  const apiKey = "api_key=2084a00f95fb3e4737567fae4e38ed85";
  const language = "language=pt-BR";
  const isMovies = async () => {
    const response = await api.get(
      `https://api.themoviedb.org/3/movie/5/translations?${apiKey}`
    );
    setLatest(response.data.results);
    console.log(response);
  };
  useEffect(() => {
    isMovies();
  }, []);

  return (
    <>
      <Container>
        <ContainerCarousel></ContainerCarousel>

        <TextExemple>{title}</TextExemple>

        <FlatList
          data={latest}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          renderItem={({ item }) => {
            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

            console.log(uri);

            return (
              <ContainerItens>
                <Image
                  source={{
                    uri,
                  }}
                />
                <TextDescription>{item.name}</TextDescription>
              </ContainerItens>
            );
          }}
        />
      </Container>
    </>
  );
}
