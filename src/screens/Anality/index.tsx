import { useNavigation } from "@react-navigation/native";

import { ButtonArrow } from "@components/ButtonArrow";
import { Card } from "@components/Card";

import { Loading } from "@components/Loading";
import { useAnalyticMeals } from "@hook/useAnalyticMeals";
import { Container, ContainerCard, Content, Header, Title } from "./styles";

export function Anality() {
  const analytic = useAnalyticMeals();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  if (!analytic) return <Loading />;

  return (
    <Container>
      <Header>
        <ButtonArrow
          color={analytic.isInDiet ? "PRIMARY" : "SECONDARY"}
          type="LEFT"
          onPress={handleGoBack}
        />

        <Card
          title={analytic.percentage}
          description="das refeições dentro da dieta"
          size="LARGE"
          type="PRIMARY"
        />
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <ContainerCard>
          <Card
            title={String(analytic.bestSequence)}
            description="melhor sequência de pratos dentro da dieta"
          />
        </ContainerCard>

        <ContainerCard>
          <Card
            title={String(analytic.total)}
            description="refeições registradas"
          />
        </ContainerCard>

        <ContainerCard>
          <Card
            title={String(analytic.totalMealInDiet)}
            description="refeições dentro da dieta"
            type="PRIMARY"
          />
          <Card
            title={String(analytic.totalMealNotInDiet)}
            description="refeições fora da dieta"
            type="SECONDARY"
          />
        </ContainerCard>
      </Content>
    </Container>
  );
}
