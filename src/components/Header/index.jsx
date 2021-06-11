import React from "react";
import {
  Container,
  Image,
  TextTitle,
  Search,
  StatusBars,
  ContainerHeader,
  ContainerImage,
  ContainerTitle,
  ContainerSearch,
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

import colors from "../../assets/utils/colors/colors";

export default function Header({ title, image, search }) {
  return (
    <Container>
      <StatusBars backgroundColor="#3F3838" />

      <ContainerHeader>
        <ContainerImage>{image && <Image source={image} />}</ContainerImage>

        <ContainerTitle>
          {title && <TextTitle>{title}</TextTitle>}
        </ContainerTitle>

        <ContainerSearch>
          <Search>
            {search && <Icon name={search} size={30} color={colors.yelow} />}
          </Search>
        </ContainerSearch>
      </ContainerHeader>
    </Container>
  );
}
