/**
 * You can replace the native storage with package with the one you want
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

const nativeStorage = {
  setStringAsync(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  },

  getStringAsync(key: string) {
    return AsyncStorage.getItem(key);
  },

  deleteStringAsync(key: string) {
    return AsyncStorage.removeItem(key);
  },
};

export default nativeStorage;
