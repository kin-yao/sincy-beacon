import AsyncStorage from '@react-native-async-storage/async-storage';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

export async function saveJson<T extends JsonValue>(key: string, value: T) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function loadJson<T>(key: string, fallback: T): Promise<T> {
  const stored = await AsyncStorage.getItem(key);
  if (!stored) {
    return fallback;
  }

  try {
    return JSON.parse(stored) as T;
  } catch {
    return fallback;
  }
}
