import { FeedbackRouteParams } from "@screens/Feedback";
import { MealRouteParams } from "@screens/Meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      anality: undefined;
      newMeal: undefined;
      updateMeal: MealRouteParams;
      feedback: FeedbackRouteParams;
      meal: MealRouteParams;
    }
  }
}
