import { Button } from "@components/Button";
import { Layout } from "@components/Layout";
import { PopupConfim } from "@components/Popup";
import { Tag } from "@components/Tag";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealRemoveByDate } from "@storage/meal/mealRemoveByDate";
import { useState } from "react";
import { ContainerButton, Content, Subtitle, Text, Title } from "./styles";

export type MealRouteParams = {
  name: string;
  description: string;
  date: string;
  time: string;
  inDiet: boolean;
};

export function Meal() {
  const route = useRoute();
  const navigation = useNavigation();

  const mealParams = route.params as MealRouteParams;
  const { name, description, date, time, inDiet } = mealParams;

  const [isPopupTrash, setIsPopupTrash] = useState(false);

  function handleTrash() {
    mealRemoveByDate(mealParams);
    navigation.navigate("home");
    setIsPopupTrash(false);
  }

  function handleUpdate() {
    navigation.navigate("updateMeal", mealParams);
    setIsPopupTrash(false);
  }

  return (
    <>
      <Layout title="Refeição" type={inDiet ? "PRIMARY" : "SECONDARY"}>
        <Content>
          <Title>{name}</Title>
          <Text>{description}</Text>
          <Subtitle>Data e hora</Subtitle>
          <Text>
            {date} às {time}
          </Text>

          {inDiet ? (
            <Tag type="PRIMARY">dentro da dieta</Tag>
          ) : (
            <Tag type="SECONDARY">fora da dieta</Tag>
          )}
        </Content>

        <ContainerButton>
          <Button isEditIcon onPress={handleUpdate}>
            Editar refeição
          </Button>
          <Button
            isTrashIcon
            variant="OUTLINE"
            onPress={() => {
              setIsPopupTrash(true);
            }}
          >
            Excluir refeição
          </Button>
        </ContainerButton>
      </Layout>

      {isPopupTrash && (
        <PopupConfim
          props={{
            title: "Deseja realmente excluir o registro da refeição?",
            textClose: "Cancelar",
            textConfirm: "Sim. excluir",
            onClose: () => {
              setIsPopupTrash(false);
            },
            onConfirm: handleTrash,
          }}
        />
      )}
    </>
  );
}
