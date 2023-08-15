import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View<Props>`
  flex: 1;

  min-height: ${({ size }) => (size === "MEDIUM" ? "96px" : "148px")};
  max-height: ${({ size }) => (size === "MEDIUM" ? "96px" : "148px")};
`;

export const Label = styled.Text`
  margin-bottom: 6px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export type TextInputSizeProps = "MEDIUM" | "LARGE";

type Props = {
  size: TextInputSizeProps;
};

export const Input = styled<Props>(TextInput)`
  border-radius: 6px;
  padding: 16px;

  margin-bottom: 24px;

  flex: 1;

  text-align-vertical: top;

  ${({ theme, size }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    color: ${theme.COLORS.GRAY_3};
    background-color: ${theme.COLORS.GRAY_7};

    border: 1px solid ${theme.COLORS.GRAY_5};
  `};
`;
