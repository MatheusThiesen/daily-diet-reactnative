import styled, { css } from "styled-components/native";

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  margin-bottom: 6px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
`;
export const Subtitle = styled.Text`
  margin-bottom: 6px;
  margin-top: 16px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
`;
export const Text = styled.Text`
  margin-bottom: 6px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const ContainerButton = styled.View`
  row-gap: 12px;
`;
