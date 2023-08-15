import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATES_COLLECTION } from "@storage/storageConfig";
import { datesGetAll } from "./datesGetAll";

export async function dateRemove(dateDeleted: string) {
  try {
    const stored = await datesGetAll();
    const dates = stored.filter((date) => date !== dateDeleted);

    await AsyncStorage.setItem(DATES_COLLECTION, JSON.stringify(dates));
  } catch (error) {
    throw error;
  }
}
