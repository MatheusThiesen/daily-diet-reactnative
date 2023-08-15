import { TouchableOpacityProps } from "react-native";
import {
  Container,
  IconAdd,
  IconEdit,
  IconTrash,
  Text,
  buttonVariantProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  children: string;
  isAddIcon?: boolean;
  isEditIcon?: boolean;
  isTrashIcon?: boolean;
  variant?: buttonVariantProps;
};

export function Button({
  children,
  isAddIcon,
  isEditIcon,
  isTrashIcon,
  variant = "SOLID",
  ...rest
}: Props) {
  return (
    <Container variant={variant} {...rest}>
      {isAddIcon && <IconAdd variant={variant} />}
      {isEditIcon && <IconEdit variant={variant} />}
      {isTrashIcon && <IconTrash variant={variant} />}
      <Text variant={variant}>{children}</Text>
    </Container>
  );
}
