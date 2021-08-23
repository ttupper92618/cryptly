import React, { useState } from "react";
import styled from "styled-components/native";
import { SearchBarProps } from "./SearchBar.types";
import rem from "../../utils/rem";
import {Dimensions} from 'react-native';

const SearchBarContainer = styled.View`
  background-color: #e2e2e2;
  height: ${rem(7)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 ${rem(1)} 0 ${rem(1)};
  width: 100%;
`;

const SearchBarField = styled.TextInput<SearchBarProps>`
  height: ${rem(4)};
  width: 80%;
  border-radius: ${rem(4)};
  padding: 0 ${rem(2)} 0 ${rem(2)};
  border: ${rem(0.125)} solid #cccccc;
  background-color: white;
`;

const SearchBarLabel = styled.Text`
  font-family: 'Roboto_500Medium';
  color: #343434;
  font-weight: 700;
  font-size: ${rem(1.5)};
  padding-right: ${rem(1)};
`;

const SearchBar: React.FC<SearchBarProps> = ({
  term,
  onTermChanged,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(term);
  const fieldWidth = Dimensions.get('window').width;

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
    if (onTermChanged) {
      onTermChanged(term);
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarLabel>Search for:</SearchBarLabel>
      <SearchBarField fieldWidth={fieldWidth}></SearchBarField>
    </SearchBarContainer>
  );
};

export default SearchBar;
