import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Anality } from "@screens/Anality";
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewOrUpdateMeal } from "@screens/NewOrUpdateMeal";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="anality" component={Anality} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="newMeal" component={NewOrUpdateMeal} />
      <Screen name="updateMeal" component={NewOrUpdateMeal} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
}
