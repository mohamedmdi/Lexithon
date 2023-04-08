import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  BackHandler,
} from "react-native";
import { Button } from "react-native-paper";
import useSound from "../../hooks/useSound";
import { getQuizHandler, decreaseHP } from "../../store/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AnswerStateModal from "./AnswerStateModal";
import { increaseTrophy, updateTrophies } from "../../store/userSlice";
import UpperBar from "./UpperBar";
import { Ionicons } from "@expo/vector-icons";
import failure from "../../assets/audios/failure.mp3";
import success from "../../assets/audios/success_cut.mp3";
import { updateTrophy } from "../../store/async-thunks";
import { useBlockButtonHandler } from "../../hooks/useBlockBackHandler";
import heart from "../../assets/imgs/filledHeart.png";
import brokenHeart from "../../assets/imgs/brokenHeart.png";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import NUMBER_OF_QUIZEZ from "../../util/numberOfQuiz";

const Content = ({ quiz, sbj, timer, setTotalAnswers, totalAnswers }) => {
  const [clickedAnswer, setClickedAnswer] = useState(null);
  const [isClicked, setIsClicked] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();
  const playsound = useSound(quiz.answer.sound);
  const navigate = useNavigation();
  const playFailureSound = useSound(failure);
  const playSuccessSound = useSound(success);
  const [modalVisible, setModalVisible] = useState(false);

  const handleExitPress = () => {
    setModalVisible(true);
    return true;
  };

  const handleCancelPress = () => {
    setModalVisible(false);
  };

  const handleConfirmPress = () => {
    console.log("L'utilisateur a confirmé la sortie");
    setModalVisible(false);
    navigate.pop();
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleExitPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleExitPress);
    };
  }, []);
  // useBlockButtonHandler(true);

  const clickedAnswerHandler = (id) => {
    return () => setClickedAnswer(id);
  };

  const checkAnswerHandler = () => {
    if (isClicked) return;
    if (!clickedAnswer) return;

    if (clickedAnswer !== quiz.answer.word) {
      playFailureSound();
      setIsCorrect(false);
      setIsClicked(true);
      dispatch(decreaseHP());
      return;
    }
    playSuccessSound();
    setTotalAnswers((prev) => (prev += 1));
    setIsCorrect(true);
    setIsClicked(true);
  };

  const nextAnswerHandler = () => {
    setClickedAnswer(null);
    setIsCorrect(null);
    setIsClicked(null);
    if (quiz.HP === 0) {
      navigate.navigate("gameover", { sbj, timer: timer, totalAnswers });
      return;
    }

    if (quiz.currentIteration === NUMBER_OF_QUIZEZ) {
      if (!quiz.isWrong) {
        dispatch(increaseTrophy(sbj));
        dispatch(updateTrophy());
      }
      navigate.navigate("gameover", { sbj, timer: timer, totalAnswers });
      return;
    }
    dispatch(getQuizHandler());
  };
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal fermée par la fonction onRequestClose");
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to exit?</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableOpacity
                onPress={handleCancelPress}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleConfirmPress}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <View style={{ flex: 1 }}>
          <UpperBar quiz={quiz} />
        </View>
        <TouchableOpacity style={styles.exit} onPress={handleExitPress}>
          <Ionicons name="close" size={35} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={playsound} style={styles.imgContainer}>
          <Ionicons name="volume-medium" size={30} color="#f5f3ff" />
        </TouchableOpacity>
        <Text onPress={playsound} style={styles.word}>
          {quiz.answer.word}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {[...Array(quiz.initialHP).keys()].map((el, i) => (
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              key={i}
              source={i + 1 <= quiz.HP ? heart : brokenHeart}
            ></Image>
          ))}
        </View>
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
    width: "100%",
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  imgContainer: {
    backgroundColor: "#7c3aed",
    borderBottomWidth: 4,
    borderColor: "#6d28d9",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
  exit: {
    paddingHorizontal: 5,
    paddingVertical: 5,
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
    marginRight: "auto",
  },
  //------------------Modal Style-------------------
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  modalButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#7c3aed",
    backgroundColor: "#7c3aed",
    borderBottomWidth: 4,
    borderColor: "#6d28d9",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
