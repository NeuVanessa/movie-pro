import React from "react";

import { Container, Image, TextTitle } from "./styles";
import Logo from "../../assets/utils/images/logo.png";
export default function Header({ title }) {
  return (
    <Container>
      <Image source={Logo} />
      {title && <TextTitle>{title}</TextTitle>}
    </Container>
  );
}
