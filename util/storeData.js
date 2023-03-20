import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    const jsonv = JSON.stringify(value);
    await AsyncStorage.setItem("user", jsonv);
  } catch (e) {
    console.error(e);
  }
};

export default storeData;
