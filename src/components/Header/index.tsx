import { ButtonArrow } from "@components/ButtonArrow";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Void } from "./styles";

type Props = {
  children: string;

  showBackButton?: boolean;
};

export function Header({ children }: Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <ButtonArrow type="LEFT" onPress={handleGoHome} />

      <Title>{children}</Title>

      <Void />
    </Container>
  );
}
