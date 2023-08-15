import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 14px;
  margin-bottom: 8px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextTime = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
export const Divider = styled.View`
  width: 1.5px;
  height: 18px;

  margin: 0 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export type RoundTypeProps = "PRIMARY" | "SECONDARY";
type Props = { type: RoundTypeProps };

export const Round = styled.View<Props>`
  width: 15px;
  height: 15px;

  border-radius: 45px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
