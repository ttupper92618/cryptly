import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components/native";
import * as Icon from "@expo/vector-icons";
import rem from "../../utils/rem";
import { HeaderProps } from "./Header.types";
import LogoComponent from '../Logo/Logo';

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-family: 'Cabin_600SemiBold';
  font-size: ${rem(3)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: ${rem(3.75)};
`;

const Trademark = styled.Text`
  font-size: ${rem(1)};
  font-family: 'Roboto_400Regular';
  font-variant: small-caps;
  padding-top: ${rem(2)};
`;

const LogoColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: ${rem(5)};
  padding-right: ${rem(0.75)};
`;

const LogoContainer = styled.View`
  width: ${rem(3.5)};
  height: ${rem(3.5)};
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
        <LogoColumn>
          <LogoContainer>
            <LogoComponent></LogoComponent>
          </LogoContainer>
        </LogoColumn>
        <Title>Cryptly</Title>
        <Trademark>TM</Trademark>
      </TitleBlockContainer>
    </HeaderWrapper>
  );
};

export default Header;
