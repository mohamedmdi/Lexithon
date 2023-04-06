import { useEffect } from "react";
import { BackHandler } from "react-native";

export const useBlockButtonHandler = (isEnabled) => {
  useEffect(() => {
    const onBackPress = () => {
      if (isEnabled) {
        return true;
      }
      return false;
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    };
  }, [isEnabled]);
};
