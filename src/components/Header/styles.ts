import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Void = styled.View``;
