import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 52px;

  padding: 6px;
  margin-top: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export type TagProps = "PRIMARY" | "SECONDARY";

type PropsRound = {
  type: TagProps;
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
