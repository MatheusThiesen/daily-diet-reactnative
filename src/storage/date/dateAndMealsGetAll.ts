import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealGetByDate } from "@storage/meal/mealGetByDate";
import { datesGetAll } from "./datesGetAll";

export type DateAndMealsProps = {
  date: string;
  meals: MealStorageDTO[];
};

export async function dateAndMealsGetAll(): Promise<DateAndMealsProps[]> {
  try {
    const storageDate = await datesGetAll();

    const dateAndMeals: DateAndMealsProps[] = [];

    for (const date of storageDate) {
      const storageMeals = await mealGetByDate(date);

      dateAndMeals.push({
        date: date,
        meals: storageMeals,
      });
    }

    return dateAndMeals.filter((f) => f.meals.length > 0);
  } catch (error) {
    throw error;
  }
}
