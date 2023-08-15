import { TouchableOpacityProps } from "react-native";
import {
  ColorIconProps,
  Container,
  IconArrowLeft,
  IconArrowUpRight,
} from "./styles";

type Props = TouchableOpacityProps & {
  type: "LEFT" | "UPRIGHT";
  color?: ColorIconProps;
};

export function ButtonArrow({ children, type, color, ...rest }: Props) {
  return (
    <Container {...rest}>
      {type === "LEFT" ? (
        <IconArrowLeft type={color} />
      ) : (
        <IconArrowUpRight type={color} />
      )}
    </Container>
  );
}
