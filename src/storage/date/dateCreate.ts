import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATES_COLLECTION } from "@storage/storageConfig";
import { datesGetAll } from "./datesGetAll";

export async function dateCreate(newDate: string) {
  try {
    const storageDates = await datesGetAll();

    const dateAlreadyExists = storageDates.find((date) => date === newDate);

    if (!dateAlreadyExists) {
      await AsyncStorage.setItem(
        `${DATES_COLLECTION}`,
        JSON.stringify([...storageDates, newDate])
      );
    }
  } catch (error) {
    throw error;
  }
}
