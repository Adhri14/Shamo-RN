import AsyncStorage from '@react-native-async-storage/async-storage';
import showMessage from './showMessage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    showMessage({
      message: e,
    });
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    showMessage({
      message: e,
    });
  }
};

export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    showMessage({
      message: e,
    });
  }
};
