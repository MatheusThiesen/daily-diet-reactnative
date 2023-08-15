import styled, { css } from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  z-index: 10;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
`;
export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 32px;
  border-radius: 8px;
  width: 90%;
`;

export const Title = styled.Text`
  margin-bottom: 36px;
  padding: 0px 16px 0px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const ContainerButton = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;
