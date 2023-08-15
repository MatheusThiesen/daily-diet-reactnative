import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Illustration = styled.Image`
  margin-top: 36px;
  margin-bottom: 36px;
`;

export type TypeColorProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: TypeColorProps;
};

export const Title = styled.Text<Props>`
  margin-bottom: 18px;

  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Bold = styled.Text`
  margin-top: 36px;
  margin-bottom: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
