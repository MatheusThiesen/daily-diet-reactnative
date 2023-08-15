import { TextInputProps } from "react-native";
import { Container, Input, Label, TextInputSizeProps } from "./styles";

type Props = TextInputProps & {
  label?: string;
  size?: TextInputSizeProps;
};

export function TextInput({ label, size = "MEDIUM", ...rest }: Props) {
  return (
    <Container size={size}>
      {label && <Label>{label}</Label>}
      <Input
        {...rest}
        multiline={size === "LARGE"}
        numberOfLines={size === "LARGE" ? 5 : 1}
      />
    </Container>
  );
}
