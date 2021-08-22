import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components/native";
import * as Icon from "@expo/vector-icons";
import rem from "../../utils/rem";
import { HeaderProps } from "./Header.types";
import {
  useFonts,
  Roboto_400Regular,
  Cabin_600SemiBold
} from "@expo-google-fonts/dev";

const HeaderWrapper = styled.View`
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  padding: ${rem(2.25)} ${rem(2.25)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  width: 100%;
  height: ${rem(12)};
`;

const TitleBlockContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const TitleBlock = styled.Text`
  font-size: ${rem(3)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: 30px;
  
`; 

const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <TitleBlockContainer>
        <TitleBlock>
          <Text>Cryptly</Text>
        </TitleBlock>
      </TitleBlockContainer>
    </HeaderWrapper>
  );
};

export default Header;
