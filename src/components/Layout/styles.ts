import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type LayoutTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type?: LayoutTypeProps;
};

export const Container = styled<Props>(SafeAreaView)`
  background-color: ${({ theme, type }) =>
    type === undefined
      ? theme.COLORS.GRAY_5
      : type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};

  flex: 1;
`;

export const Body = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 26px 26px 0 0;
  padding: 42px 24px 12px 24px;
`;

export const Content = styled.View`
  flex: 1;
`;
