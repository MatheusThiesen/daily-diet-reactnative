import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./MealStorageDTO";
import { mealGetByDate } from "./mealGetByDate";

import { dateRemove } from "@storage/date/dateRemove";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealRemoveByDate(mealRemove: MealStorageDTO) {
  try {
    const storage = await mealGetByDate(mealRemove.date);
    const filtered = storage.filter(
      (meal) => meal.name !== mealRemove.name && meal.time !== mealRemove.time
    );

    if (filtered.length === 0) {
      dateRemove(mealRemove.date);
    }

    const meal = JSON.stringify(filtered);

    AsyncStorage.setItem(`${MEAL_COLLECTION}-${mealRemove.date}`, meal);
  } catch (error) {
    throw error;
  }
}
