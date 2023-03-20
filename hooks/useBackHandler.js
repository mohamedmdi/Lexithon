import { useEffect } from "react";
import { BackHandler } from "react-native";

const handleBackPress = () => {
  BackHandler.exitApp();
  return true;
};

const useBackHandler = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
};

export default useBackHandler;
