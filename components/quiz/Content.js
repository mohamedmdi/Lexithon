import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, MD3Colors, ProgressBar } from "react-native-paper";
import useSound from "../../hooks/useSound";
import { getQuizHandler, decreaseHP } from "../../store/quizSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AnswerStateModal from "./AnswerStateModal";
import { increaseTrophy } from "../../store/userSlice";
import UpperBar from "./UpperBar";
import { Ionicons } from "@expo/vector-icons";

const Content = ({ quiz }) => {
  const [clickedAnswer, setClickedAnswer] = useState(null);
  const [isClicked, setIsClicked] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();
  const playsound = useSound(quiz.answer.sound);
  const navigate = useNavigation();

  const clickedAnswerHandler = (id) => {
    return () => setClickedAnswer(id);
  };

  const checkAnswerHandler = () => {
    if (!clickedAnswer) return;

    if (clickedAnswer !== quiz.answer.word) {
      console.log(clickedAnswer);
      console.log("The Answer Is Wrong");

      setIsCorrect(false);
      setIsClicked(true);
      dispatch(decreaseHP());
      return;
    }
    setIsCorrect(true);
    setIsClicked(true);
  };

  const nextAnswerHandler = () => {
    setClickedAnswer(null);
    setIsCorrect(null);
    setIsClicked(null);
    if (quiz.HP === 0) {
      navigate.navigate("gameover");
      return;
    }

    if (quiz.currentIteration === 3) {
      if (!quiz.isWrong) dispatch(increaseTrophy());
      navigate.navigate("gameover");
      return;
    }
    dispatch(getQuizHandler());
  };
  return (
    <>
      <UpperBar quiz={quiz} />
      <View style={styles.header}>
        <TouchableOpacity onPress={playsound} style={styles.imgContainer}>
          {/* <Image
            source={volume}
            style={{ tintColor: "#f5f3ff", width: 30, height: 30 }}
          /> */}
          <Ionicons name="volume-medium" size={30} color="#f5f3ff" />
        </TouchableOpacity>
        <Text onPress={playsound} style={styles.word}>
          {quiz.answer.word}
        </Text>
      </View>
      <View style={styles.body}>
        {quiz.results.map((result, i) => (
          <TouchableOpacity
            key={i}
            disabled={isClicked && true}
            onPress={clickedAnswerHandler(result.word)}
            style={
              clickedAnswer === result.word
                ? { ...styles.answer, ...styles.hover }
                : styles.answer
            }
          >
            <Image style={styles.img} source={result.img}></Image>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        style={{
          backgroundColor: "#7c3aed",
          backgroundColor: "#7c3aed",
          borderBottomWidth: 4,
          borderColor: "#6d28d9",
        }}
        mode="contained"
        onPress={checkAnswerHandler}
      >
        Check{" "}
      </Button>
      {isCorrect === null ? null : (
        <AnswerStateModal
          isCorrect={isCorrect}
          nextAnswerHandler={nextAnswerHandler}
        />
      )}
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  header: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "flex-start",
  },

  imgContainer: {
    backgroundColor: "#7c3aed",
    borderBottomWidth: 4,
    borderColor: "#6d28d9",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 7,
  },

  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 10,
    rowGap: 20,
  },

  answer: {
    flexGrow: 1,
    alignItems: "center",
    width: "46.9%",
    borderRadius: 8,
    borderColor: "#7c3aed",
    borderWidth: 1,
    borderBottomWidth: 4,
  },

  img: {
    resizeMode: "contain",
    width: "68%",
    height: "68%",
  },

  hover: {
    backgroundColor: "rgba(124,58,237, 0.3)",
  },

  word: {
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: "#7c3aed",
    borderStyle: "dotted",
    fontSize: 18,
    fontWeight: "600",
    color: "#7c3aed",
    alignSelf: "center",
  },
});
