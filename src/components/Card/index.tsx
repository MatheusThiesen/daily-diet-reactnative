import { ButtonArrow } from "@components/ButtonArrow";
import {
  ButtonSizeStyleProps,
  ButtonTypeStyleProps,
  Container,
  ContainerButtonArrow,
  Description,
  Title,
} from "./styles";

type Props = {
  title: string;
  description: string;

  onPressButtonArrowUpRight?: () => void;
  size?: ButtonSizeStyleProps;
  type?: ButtonTypeStyleProps;
};

export function Card({
  description,
  title,
  size,
  type,
  onPressButtonArrowUpRight,
}: Props) {
  return (
    <Container type={type}>
      {onPressButtonArrowUpRight && (
        <ContainerButtonArrow>
          <ButtonArrow
            color={type}
            type="UPRIGHT"
            onPress={onPressButtonArrowUpRight}
          />
        </ContainerButtonArrow>
      )}

      <Title size={size ?? "MEDIUM"}>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
