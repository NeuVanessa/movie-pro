import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import SliderMovies from "../../components/SliderMovies";

import Logo from "../../assets/utils/images/logo.png";
import Continues from "../../components/Continues";
import DubbedMovie from '../../components/DubbedMovie';
import { Container } from "./styles";
//import Add from "../../services/movies/AddedNow.json";

export default function Home() {
  return (
    <Container>
      <Header image={Logo} search="search" />

      <View style={{ top: 70 }}>
        <SliderMovies title="CAROUSEL INFORMAÇÕES" />
      </View>

      <View style={{ top: 70 }}>
        <Continues title="ADICIONADO AGORA" />
        <View></View>
      </View>

      <View style={{ top: 10 }}>
        <SliderMovies title="CONTINUE ASSISTINDO " />
      </View>

      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ top: 0, backgroundColor: "#FFCB13" }}>
          <DubbedMovie title="DUBLADOS" />
        </View>


        </View>
      {/* <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ top: 0, backgroundColor: "#FFCB13" }}>
          <Teste title="DUBLADOS" />
        </View>
        <View style={{ bottom: 30, backgroundColor: "#FFCB13", height: 260 }}>
          <Teste title="TERRORZINGO DA NOITE" />
        </View>
        <View style={{ bottom: 30, backgroundColor: "#FFCB13", height: 320 }}>
          <Teste title="É HORA DA PIPOCA" />
        </View>
      </View> */}
    </Container>
  );
}
