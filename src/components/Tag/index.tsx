import { Container, Round, TagProps, Text } from "./styles";

type Props = {
  children: string;
  type: TagProps;
};

export function Tag({ children, type }: Props) {
  return (
    <Container>
      <Round type={type} />
      <Text>{children}</Text>
    </Container>
  );
}
