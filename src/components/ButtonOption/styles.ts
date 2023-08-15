import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  type: ButtonOptionProps;
  active: boolean;
};

export const Container = styled<Props>(TouchableOpacity)`
  flex: 1;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 6px;

  min-height: 52px;
  max-height: 52px;

  background-color: ${({ theme, type, active }) =>
    !active
      ? theme.COLORS.GRAY_6
      : type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  border: 2px solid
    ${({ theme, type, active }) =>
      !active
        ? theme.COLORS.GRAY_6
        : type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};
`;

export type ButtonOptionProps = "PRIMARY" | "SECONDARY";

type PropsRound = {
  type: ButtonOptionProps;
};

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const Round = styled.View<PropsRound>`
  width: 10px;
  height: 10px;

  border-radius: 10px;

  margin-right: 6px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
