import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import trophy from "../assets/trophy.png";
import panda from "../assets/panda.png";
import NUMBER_OF_QUIZEZ from "../util/numberOfQuiz";

const GameOver = (props) => {
  const timer = (Date.now() - props.route.params.timer) / 1000;
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
    <Body
      statusBarColor="#f5f3ff"
      style={{
        paddingHorizontal: 0,
        paddingVertical: 0,
        backgroundColor: "#ffcf32",
        gap: 0,
      }}
    >
      <View style={styles.top}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ resizeMode: "contain", width: 280, height: 280 }}
            source={
              props.route.params.totalAnswers === NUMBER_OF_QUIZEZ
                ? trophy
                : panda
            }
          ></Image>
        </View>
        <Text style={styles.h1}>
          {props.route.params.totalAnswers === NUMBER_OF_QUIZEZ
            ? "Congratulations 👏"
            : "HardLuck 💔"}{" "}
        </Text>
        <Text style={styles.h2}>
          {props.route.params.totalAnswers === NUMBER_OF_QUIZEZ
            ? "Lesson Complete"
            : "Lesson InComplete"}
        </Text>
        <View style={styles.stats}>
          <View style={styles.containerStat}>
            <View style={styles.con}>
              <MaterialIcons name="timer" size={30} color="#f5f3ff" />
              <Text
                style={{ ...styles.stat, fontWeight: "normal", fontSize: 15 }}
              >
                Timer
              </Text>
            </View>
            <Text style={{ ...styles.stat }}>
              {`${Math.trunc(timer / 60)}`.padStart(2, 0)}:
              {`${Math.trunc(timer % 60)}`.padStart(2, 0)}{" "}
              {Math.trunc(timer / 60) === 0 ? "sec" : "min"}
            </Text>
          </View>
          <View
            style={{
              ...styles.containerStat,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: "#f5f3ff",
            }}
          >
            <View style={{ ...styles.con }}>
              <MaterialIcons name="check-circle" size={30} color="#f5f3ff" />
              <Text
                style={{ ...styles.stat, fontWeight: "normal", fontSize: 15 }}
              >
                Answer
              </Text>
            </View>
            <Text style={{ ...styles.stat }}>
              {props.route.params.totalAnswers}/10
            </Text>
          </View>
          <View style={styles.containerStat}>
            <View style={{ ...styles.con }}>
              <Ionicons name="trophy" size={30} color="#f5f3ff" />
              <Text
                style={{ ...styles.stat, fontWeight: "normal", fontSize: 15 }}
              >
                Trophy
              </Text>
            </View>
            <Text style={{ ...styles.stat }}>
              {props.route.params.totalAnswers === NUMBER_OF_QUIZEZ
                ? "+1"
                : "+0"}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          style={{
            ...styles.button,
            backgroundColor: "#3aafff",
            borderColor: "#287ab2",
          }}
          mode="contained"
          onPress={() => props.navigation.navigate("home")}
        >
          Return Home{" "}
        </Button>
        <Button
          style={{
            ...styles.button,
            backgroundColor: "#ff8811",
            borderColor: "#b25f0b",
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
  top: {
    backgroundColor: "#f5f3ff",
    height: "80%",
    flex: 4,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  btn: {},
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    fontSize: 25,
    textAlign: "center",
  },

  con: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  stats: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#a55fef",
    width: "90%",
    height: "20%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 5,
  },

  containerStat: {
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    width: "30%",
    gap: 10,
  },

  stat: {
    fontSize: 20,
    fontWeight: "900",
    color: "#f5f3ff",
    marginRight: "auto",
    marginLeft: "auto",
  },
  button: {
    width: "40%",
    height: "40%",
    borderBottomWidth: 4,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
