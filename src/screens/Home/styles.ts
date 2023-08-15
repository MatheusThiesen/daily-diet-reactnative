import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const ContainerList = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 24px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;

  margin-bottom: 32px;
`;

export const Logo = styled.Image``;

export const Perfil = styled.Image``;

export const Title = styled.Text`
  margin-top: 36px;
  margin-bottom: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const CardContainer = styled.View`
  height: 120px;
  width: 100%;
  position: relative;
`;

export const MealContainer = styled.View`
  margin-top: 12px;
`;

export const MealTitle = styled.Text`
  margin-bottom: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
