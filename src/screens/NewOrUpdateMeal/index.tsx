import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

import { MealRouteParams } from "@screens/Meal";

import {
  ContainerButton,
  Content,
  GroupButtonOption,
  GroupInput,
  TitleButtonOption,
} from "./styles";

import { Button } from "@components/Button";
import { ButtonOption } from "@components/ButtonOption";
import { Layout } from "@components/Layout";
import { TextInput } from "@components/TextInput";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealRemoveByDate } from "@storage/meal/mealRemoveByDate";
import { AppError } from "@utils/AppError";

export function NewOrUpdateMeal() {
  const navigation = useNavigation();
  const route = useRoute();

  const mealParams = route.params as MealRouteParams;
  const isUpdate = !!mealParams?.name;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [inDiet, setInDiet] = useState<boolean | undefined>(undefined);

  async function handleSubmit() {
    const validForm = valid();
    if (!validForm) return;

    const data = {
      name,
      description,
      date,
      time,
      inDiet: !!inDiet,
    };

    if (isUpdate) {
      updateMeal(data);
      navigation.navigate("meal", data);
    } else {
      await createMeal(data);
      navigation.navigate("feedback", {
        type: inDiet ? "PRIMARY" : "SECONDARY",
      });
    }

    reset();
  }

  async function createMeal(newMeal: MealStorageDTO) {
    try {
      await mealCreate(newMeal);
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Novo refeição", error.message);
      }

      Alert.alert("Novo refeição", "Nao foi possível criar um novo refeição.");
      console.log(error);
    }
  }
  async function updateMeal(newMeal: MealStorageDTO) {
    try {
      await mealRemoveByDate(mealParams);
      await mealCreate(newMeal);
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Novo refeição", error.message);
      }

      Alert.alert("Novo refeição", "Nao foi possível criar um novo refeição.");
      console.log(error);
    }
  }

  function reset() {
    setName("");
    setDescription("");
    setDate("");
    setTime("");
    setInDiet(undefined);
  }

  function valid() {
    if (name.trim().length === 0) {
      Alert.alert("Nova refeição", "Informe o nome refeição.");
      return false;
    }
    if (description.trim().length === 0) {
      Alert.alert("Nova refeição", "Informe a descrição refeição.");
      return false;
    }
    if (date.trim().length === 0) {
      Alert.alert("Nova refeição", "Informe a data refeição.");
      return false;
    }
    if (time.trim().length === 0) {
      Alert.alert("Nova refeição", "Informe a hora da refeição.");
      return false;
    }
    if (inDiet === undefined) {
      Alert.alert("Nova refeição", "Informe se está dentro da dieta.");
      return false;
    }

    return true;
  }

  useFocusEffect(
    useCallback(() => {
      if (isUpdate) {
        setName(mealParams.name);
        setDescription(mealParams.description);
        setDate(mealParams.date);
        setTime(mealParams.time);
        setInDiet(mealParams.inDiet);
      }
      mealParams;
    }, [])
  );

  return (
    <Layout title={isUpdate ? "Editar refeição" : "Nova refeição"}>
      <Content>
        <TextInput label="Nome" onChangeText={setName} value={name} />
        <TextInput
          label="Descrição"
          onChangeText={setDescription}
          value={description}
          size="LARGE"
        />

        <GroupInput>
          <TextInput label="Data" onChangeText={setDate} value={date} />
          <TextInput label="Hora" onChangeText={setTime} value={time} />
        </GroupInput>

        <TitleButtonOption>Está dentro da dieta?</TitleButtonOption>
        <GroupButtonOption>
          <ButtonOption
            type="PRIMARY"
            active={inDiet === true}
            onPress={() => setInDiet(true)}
          >
            Sim
          </ButtonOption>
          <ButtonOption
            type="SECONDARY"
            active={inDiet === false}
            onPress={() => setInDiet(false)}
          >
            Não
          </ButtonOption>
        </GroupButtonOption>

        <ContainerButton>
          <Button onPress={handleSubmit}>
            {isUpdate ? "Salvar alterações" : "Cadastrar refeição"}
          </Button>
        </ContainerButton>
      </Content>
    </Layout>
  );
}
