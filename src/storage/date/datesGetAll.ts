import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATES_COLLECTION } from "@storage/storageConfig";

export async function datesGetAll(): Promise<string[]> {
  try {
    const storage = await AsyncStorage.getItem(DATES_COLLECTION);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
