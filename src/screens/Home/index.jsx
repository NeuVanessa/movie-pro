import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import Header from "../../components/Header";
import SliderMovies from "../../components/SliderMovies";
import api from "../../services/api";

import Logo from "../../assets/utils/images/logo.png";
import Teste from "../../components/Continues";
import { Container } from "./styles";

export default function Home() {
  return (
    //     <View>
    //       <Header image={Logo} search="search" />
    //       <SafeAreaView style={{ top: 80 }}>
    //         <ScrollView>
    //           <SliderMovies />

    // <View>

    // </View>

    //      </ScrollView>

    //       </SafeAreaView>
    //     </View>

    <Container>
      <Header image={Logo} search="search" />
      {/* <SliderMovies /> */}

      <View style={{ top: 70 }}>
        <SliderMovies title="CAROUSEL INFORMAÇÕES" />
      </View>

      <View style={{ top: 70 }}>
        <Teste title="ADICIONADO AGORA" />
      </View>

      <View style={{ top: 10 }}>
        <SliderMovies title="CONTINUE ASSISTINDO " />
      </View>

      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ top: 0, backgroundColor: "#FFCB13" }}>
          <Teste title="DUBLADOS" />
        </View>
        <View style={{ bottom: 30, backgroundColor: "#FFCB13", height: 260 }}>
          <Teste title="TERRORZINGO DA NOITE" />
        </View>
        <View style={{ bottom: 30, backgroundColor: "#FFCB13", height: 320 }}>
          <Teste title="É HORA DA PIPOCA" />
        </View>
      </View>
    </Container>
  );
}
