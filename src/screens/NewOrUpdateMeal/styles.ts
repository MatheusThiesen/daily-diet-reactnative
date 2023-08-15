import { ScrollView } from "react-native";
import styled, { css } from "styled-components/native";

export const Content = styled(ScrollView).attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;

export const GroupInput = styled.View`
  flex-direction: row;
  column-gap: 24px;
`;

export const TitleButtonOption = styled.Text`
  margin-bottom: 6px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const GroupButtonOption = styled.View`
  flex-direction: row;
  column-gap: 10px;
`;

export const ContainerButton = styled.View`
  margin-top: 55%;
  flex: 1;
  justify-content: flex-end;
`;
