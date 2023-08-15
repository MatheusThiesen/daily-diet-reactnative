import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";

export type buttonVariantProps = "SOLID" | "OUTLINE";

type Props = {
  variant: buttonVariantProps;
};

export const Container = styled<Props>(TouchableOpacity)`
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
  background-color: ${({ theme, variant }) =>
    variant === "SOLID" ? theme.COLORS.GRAY_2 : "transparent"};
  border-radius: 6px;
  padding: 14px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text<Props>`
  text-align: center;

  ${({ theme, variant }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${variant === "SOLID" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
  `};
`;

export const IconAdd = styled(Plus).attrs<Props>(({ theme, variant }) => ({
  color: variant === "SOLID" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
  size: 22,
}))`
  margin-right: 12px;
`;
export const IconEdit = styled(PencilSimpleLine).attrs<Props>(
  ({ theme, variant }) => ({
    color: variant === "SOLID" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
    size: 22,
  })
)`
  margin-right: 12px;
`;
export const IconTrash = styled(Trash).attrs<Props>(({ theme, variant }) => ({
  color: variant === "SOLID" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
  size: 22,
}))`
  margin-right: 12px;
`;
