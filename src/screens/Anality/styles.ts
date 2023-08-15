import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Header = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const Content = styled.View`
  flex: 5;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 26px;
  padding: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const ContainerCard = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
  column-gap: 12px;
`;
