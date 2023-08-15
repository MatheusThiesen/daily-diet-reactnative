import { datesGetAll } from "@storage/date/datesGetAll";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealGetByDate } from "./mealGetByDate";

export async function mealsGetAll(): Promise<MealStorageDTO[]> {
  try {
    const storageDate = await datesGetAll();

    const normalized: MealStorageDTO[] = [];

    for (const date of storageDate) {
      const storageMeals = await mealGetByDate(date);

      for (const meal of storageMeals) {
        normalized.push(meal);
      }
    }

    return normalized;
  } catch (error) {
    throw error;
  }
}
