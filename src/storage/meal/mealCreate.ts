import AsyncStorage from "@react-native-async-storage/async-storage";

import { dateCreate } from "@storage/date/dateCreate";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealGetByDate } from "./mealGetByDate";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storageMeals = await mealGetByDate(newMeal.date);

    const mealsAlreadyExists = storageMeals.filter(
      (meal) => meal.name === newMeal.name && meal.time === newMeal.time
    );

    if (mealsAlreadyExists.length > 0) {
      throw new AppError("Ja existe um player cadastrado com esse nome.");
    }

    await dateCreate(newMeal.date);

    await AsyncStorage.setItem(
      `${MEAL_COLLECTION}-${newMeal.date}`,
      JSON.stringify([...storageMeals, newMeal])
    );
  } catch (error) {
    throw error;
  }
}
