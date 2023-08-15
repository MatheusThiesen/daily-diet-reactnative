import { TouchableOpacityProps } from "react-native";
import { ButtonOptionProps, Container, Round, Text } from "./styles";

type Props = TouchableOpacityProps & {
  children: string;
  active?: boolean;
  type: ButtonOptionProps;
};

export function ButtonOption({
  children,
  type,
  active = false,
  ...rest
}: Props) {
  return (
    <Container type={type} active={active} {...rest}>
      <Round type={type} />
      <Text>{children}</Text>
    </Container>
  );
}
