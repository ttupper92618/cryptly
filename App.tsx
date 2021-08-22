import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components/native";
import * as Icon from "@expo/vector-icons";
import rem from "./utils/rem";
import Header from './components/Header/Header';

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  align-items: center;
  justify-content: flex-start;
`;

export default function App() {
  return (
    <Container>
      <Header></Header>
      <Text>Nothing to see here yet holmes!</Text>
    </Container>
  );
}
