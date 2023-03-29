import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import Body from "../layout/Body";

const GameOver = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      const handleBackPress = () => {
        navigation.navigate("home");
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );

      return () => {
        backHandler.remove();
      };
    }, [])
  );

  return (
    <Body>
      <View style={styles.main}>
        <Text>Game Over</Text>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text>Game Over</Text>
        </TouchableOpacity>
      </View>
    </Body>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    height: "100%",
    gap: 20,
    paddingVertical: 25,
  },
});
