import { Container, ContainerButton, Content, Title } from "./styles";

import { Button } from "@components/Button";

type Props = {
  props: {
    title: string;

    textClose: string;
    textConfirm: string;

    onClose: () => void;
    onConfirm: () => void;
  };
};

export function PopupConfim({
  props: { onClose, onConfirm, textClose, textConfirm, title },
}: Props) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <ContainerButton>
          <Button style={{ width: "48%" }} variant="OUTLINE" onPress={onClose}>
            {textClose}
          </Button>
          <Button style={{ width: "48%" }} onPress={onConfirm}>
            {textConfirm}
          </Button>
        </ContainerButton>
      </Content>
    </Container>
  );
}
