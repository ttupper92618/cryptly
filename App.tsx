import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components/native";
import * as Icon from "@expo/vector-icons";
import rem from "./utils/rem";
import Header from './components/Header/Header';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Cabin_600SemiBold
} from "@expo-google-fonts/dev";

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  align-items: center;
  justify-content: flex-start;
`;

const StyledText = styled.Text`
  font-family: 'Roboto_400Regular';
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    Cabin_600SemiBold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Header></Header>
        <StyledText>Nothing to see here yet holmes!</StyledText>
      </Container>
    );
  }
}
