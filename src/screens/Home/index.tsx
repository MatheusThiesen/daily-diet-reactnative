import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

import logoImg from "@assets/logo.png";
import perfilImg from "@assets/perfil.png";

import {
  CardContainer,
  Container,
  ContainerList,
  Header,
  Logo,
  MealContainer,
  MealTitle,
  Perfil,
  Title,
} from "./styles";

import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { MealItemList } from "@components/MealItemList";

import { useAnalyticMeals } from "@hook/useAnalyticMeals";
import {
  DateAndMealsProps,
  dateAndMealsGetAll,
} from "@storage/date/dateAndMealsGetAll";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export function Home() {
  const navigation = useNavigation();
  const [dateAndMeals, setDateAndMeals] = useState<DateAndMealsProps[]>([]);
  const analytic = useAnalyticMeals();

  function handleGoAnality() {
    navigation.navigate("anality");
  }

  function handleGoNewMeal() {
    navigation.navigate("newMeal");
  }

  function handleGoMeal(meal: MealStorageDTO) {
    navigation.navigate("meal", meal);
  }

  async function fetchDateAndMeals() {
    try {
      const storage = await dateAndMealsGetAll();

      setDateAndMeals(storage);
    } catch (error) {
      console.log(error);
      Alert.alert("Refeições", "Não foi possível carregar as refeições.");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchDateAndMeals();
    }, [])
  );

  return (
    <Container>
      <ContainerList>
        <Header>
          <Logo source={logoImg} />
          <Perfil source={perfilImg} />
        </Header>

        <CardContainer>
          <Card
            title={analytic.percentage}
            description="das refeições dentro da dieta"
            size="LARGE"
            type={analytic.isInDiet ? "PRIMARY" : "SECONDARY"}
            onPressButtonArrowUpRight={handleGoAnality}
          />
        </CardContainer>

        <Title>Refeições</Title>

        <Button isAddIcon onPress={handleGoNewMeal}>
          Nova refeição
        </Button>

        {dateAndMeals.map((date) => (
          <MealContainer key={date.date}>
            <MealTitle>{date.date}</MealTitle>

            {date.meals.map((meal) => (
              <MealItemList
                key={meal.time + meal.name}
                time={meal.time}
                description={meal.name}
                type={meal.inDiet ? "PRIMARY" : "SECONDARY"}
                onPress={() => handleGoMeal(meal)}
              />
            ))}
          </MealContainer>
        ))}
      </ContainerList>
    </Container>
  );
}
