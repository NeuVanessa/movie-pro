import styled from "styled-components/native";
import colors from "../../assets/utils/colors/colors";

export const Container = styled.View`
  flex: 1;

  width: 100%;
  height: 70px;
`;
export const ContainerHeader = styled.View`
  height: 70px;
  background-color: ${colors.primary};
  flex-direction: row;
`;
export const ContainerTitle = styled.View`
  flex-grow: 25px;
  background-color: transparent;
`;
export const ContainerSearch = styled.View`
  flex-grow: 15px;
  background-color: transparent;
`;

export const ContainerImage = styled.View`
  flex-grow: 10px;
`;
export const Image = styled.Image`
  text-align: center;
  left: 16px;
  font-weight: bold;
  margin-top: 0px;
`;
export const TextTitle = styled.Text`
  flex-grow: 30px;
  color: red;

  font-size: 15px;
  background-color: black;
`;

export const Search = styled.View`
  top: 12px;
  left: 50px;
`;

export const StatusBars = styled.StatusBar``;
