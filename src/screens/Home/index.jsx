import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import SliderMovies from "../../components/SliderMovies";

import Logo from "../../assets/utils/images/logo.png";
import Continues from "../../components/Continues";
import DubbedMovie from "../../components/DubbedMovie";
import MostVoted from "../../components/MostVoted";
import PosterMovie from "../../components/PosterMovie";
import NextMovie from "../../components/NextMovie";

import CarouselMovie from "../../components/CarouselMovie";
import InfoApp from '../../components/InfoApp';

import { Container } from "./styles";
//import Add from "../../services/movies/AddedNow.json";

export default function Home() {
  return (
    <Container>
      <Header image={Logo} search="search" />

      <View style={{ top:80}}>
     
        <CarouselMovie />
     

      </View>

      <View style={{ top: 70 }}>
        <Continues title="ADICIONADO AGORA" />
        <View></View>
      </View>

      <View style={{ top: 10 }}>
        <InfoApp/>
      </View>

      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ top: 0, backgroundColor: "#FFCB13" }}>
          <DubbedMovie title="POPULARES" />
        </View>

        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={{ top: 0, backgroundColor: "#FFCB13" }}>
            <MostVoted title="MAIS AVALIADOS" />
          </View>
          <View style={{ bottom: 30, backgroundColor: "#FFCB13", height: 260 }}>
            <PosterMovie title="EM CARTAZ" />
          </View>
          <View style={{ bottom: 30, backgroundColor: "#FFCB13", height: 450 }}>
            <NextMovie title="É HORA DA PIPOCA [PROXIMOS FILMES A LANCAR]" />
          </View>
        </View>
      </View>
    </Container>
  );
}
