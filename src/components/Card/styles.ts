import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";
export type ButtonSizeStyleProps = "LARGE" | "MEDIUM";

type Props = {
  type?: ButtonTypeStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  padding: 18px;
  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    !type
      ? theme.COLORS.GRAY_6
      : type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};

  align-items: center;
  justify-content: center;
`;

type PropsTitle = {
  size: ButtonSizeStyleProps;
};

export const Title = styled.Text<PropsTitle>`
  text-align: center;

  ${({ theme, size }) => css`
    font-size: ${size === "MEDIUM"
      ? theme.FONT_SIZE.XXL
      : theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Description = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const ContainerButtonArrow = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
`;
