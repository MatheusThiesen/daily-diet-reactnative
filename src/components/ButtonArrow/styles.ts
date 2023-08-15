import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: start;
`;

export type ColorIconProps = "PRIMARY" | "SECONDARY";

type Props = {
  type?: ColorIconProps;
};

export const IconArrowLeft = styled(ArrowLeft).attrs<Props>(
  ({ theme, type }) => ({
    color:
      type === undefined
        ? theme.COLORS.GRAY_2
        : type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
    size: 24,
  })
)``;
export const IconArrowUpRight = styled(ArrowUpRight).attrs<Props>(
  ({ theme, type }) => ({
    color:
      type === undefined
        ? theme.COLORS.GRAY_2
        : type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
    size: 24,
  })
)``;
