import { useFocusEffect } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { useCallback, useState } from "react";

type AnalyticProps = {
  total: number;
  bestSequence: number;
  totalMealInDiet: number;
  totalMealNotInDiet: number;
  percentage: string;
  isInDiet: boolean;
};

export function useAnalyticMeals() {
  const [analytic, setAnalytic] = useState<AnalyticProps>({} as AnalyticProps);

  async function fetchAnalytic() {
    const meals = await mealsGetAll();

    const total = meals.length;
    const totalMealInDiet = meals.filter((meal) => meal.inDiet === true).length;
    const totalMealNotInDiet = meals.filter(
      (meal) => meal.inDiet === false
    ).length;

    const percentage = (totalMealInDiet / total) * 100;

    const normalized: AnalyticProps = {
      total,
      totalMealInDiet,
      totalMealNotInDiet,
      percentage: isNaN(percentage) ? "0 %" : `${percentage.toFixed(2)} %`,
      isInDiet: percentage >= 50,
      bestSequence: bestSequence(meals),
    };

    setAnalytic(normalized);
  }

  function bestSequence(meals: MealStorageDTO[]): number {
    let total = 0;
    let count = 0;

    for (const meal of meals) {
      if (meal.inDiet === true) {
        count++;
      }

      if (total < count) {
        total = count;
      }

      if (meal.inDiet === false) {
        count = 0;
      }
    }

    return total;
  }

  useFocusEffect(
    useCallback(() => {
      fetchAnalytic();
    }, [])
  );

  return analytic;
}
