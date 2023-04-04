import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import Body from "../components/layout/Body";
import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
import t from "../assets/animation_500_lg2htldt.gif";
import f from "../assets/107653-trophy.json";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const GameOver = (props) => {
  useFocusEffect(
    useCallback(() => {
      const handleBackPress = () => {
        props.navigation.navigate("home");
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
    <Body statusBarColor="#f5f3ff">
      <Text style={styles.h1}>Congratulations ;)</Text>
      <Text style={styles.h1}>Lesson Complete</Text>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <AnimatedLottieView
          source={require("../assets/38169-losing-ballon.json")}
          autoPlay
        /> */}
      </View>
      <View style={styles.stats}>
        <View style={styles.containerStat}>
          <View style={styles.con}>
            <Ionicons name="infinite" size={24} color="white" />
          </View>
          <Text style={styles.stat}>
            {(Date.now() - props.route.params.timer) / 1000} sec
          </Text>
        </View>
        <View style={styles.containerStat}>
          <View style={styles.con}>
            <Ionicons name="hourglass" size={24} color="white" />
          </View>
          <Text style={styles.stat}>{props.route.params.totalAnswers}/10</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Button
          style={{
            backgroundColor: "#7c3aed",
            backgroundColor: "#7c3aed",
            borderBottomWidth: 4,
            borderColor: "#6d28d9",
            color: "#6d28d9",
            flex: 1,
          }}
          mode="contained"
          onPress={() => props.navigation.navigate("home")}
        >
          Return Home{" "}
        </Button>
        <Button
          style={{
            backgroundColor: "#7c3aed",
            backgroundColor: "#7c3aed",
            borderBottomWidth: 4,
            borderColor: "#6d28d9",
            flex: 1,
          }}
          mode="contained"
          onPress={() =>
            props.navigation.navigate("quiz", { id: props.route.params.sbj })
          }
        >
          Play Again{" "}
        </Button>
      </View>
    </Body>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  btn: {},
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#d3a107",
  },

  con: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  stats: {
    gap: 10,
  },

  containerStat: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },

  stat: {
    fontSize: 20,
    fontWeight: "900",
    color: "blue",
    marginRight: "auto",
    marginLeft: "auto",
  },
});
