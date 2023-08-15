import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Bold,
  Container,
  Illustration,
  Subtitle,
  Title,
  TypeColorProps,
} from "./styles";

import illustrationHappy from "@assets/happy.png";
import illustrationSad from "@assets/sad.png";
import { Button } from "@components/Button";

export type FeedbackRouteParams = {
  type: TypeColorProps;
};

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { type } = route.params as FeedbackRouteParams;

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title type={type}>
        {type === "PRIMARY" ? "Continue assim!" : "Que pena!"}
      </Title>
      <Subtitle>
        {type === "PRIMARY" ? (
          <>
            Você continua
            <Bold> dentro da dieta. </Bold>
            Muito bem!
          </>
        ) : (
          <>
            Você
            <Bold> saiu da dieta </Bold>
            dessa vez, mas continue se esforçando e não desista!
          </>
        )}
      </Subtitle>

      <Illustration
        source={type === "PRIMARY" ? illustrationHappy : illustrationSad}
      />

      <Button onPress={handleGoHome}>Ir para a página inicial</Button>
    </Container>
  );
}
