import React, { useCallback, useEffect, useState } from "react";
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
import { getQuizHandler, decreaseHP, clearQuiz } from "../../store/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import AnswerStateModal from "./AnswerStateModal";
import { increaseTrophy, updateTrophies } from "../../store/userSlice";
import UpperBar from "./UpperBar";
import { Ionicons } from "@expo/vector-icons";
import failure from "../../assets/audios/wrongAnswer.mp3";
import success from "../../assets/audios/success_cut.mp3";
import { updateTrophy } from "../../store/async-thunks";
import { useBlockButtonHandler } from "../../hooks/useBlockBackHandler";
import heart from "../../assets/imgs/filledHeart.png";
import brokenHeart from "../../assets/imgs/brokenHeart.png";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import NUMBER_OF_QUIZEZ from "../../util/numberOfQuiz";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import imgSword from "../../assets/imgs/sword.png";

const Content = ({ sbj, timer, setTotalAnswers, totalAnswers }) => {
  const quiz = useSelector((state) => state.quiz);
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
    if (running) {
      console.log("stop running");
      setRunning(false);
    }

    return true;
  };

  const handleCancelPress = () => {
    setModalVisible(false);
    if (!running) {
      console.log("start running");
      setRunning(true);
    }
  };

  const handleConfirmPress = () => {
    console.log("User confirmed exit");
    setModalVisible(false);
    dispatch(clearQuiz());
    navigate.pop();
  };
  //-----------------------------------COUNT--------------------------
  const COUNT = 60;
  const isFocused = useIsFocused();
  const [count, setCount] = useState(COUNT);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (isFocused) {
      setCount(COUNT);
      setRunning(true);
    }
  }, [isFocused]);

  useEffect(() => {
    if (count === 0) playFailureSound();
  }, [count]);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          clearInterval(interval);
          dispatch(decreaseHP());
          setIsCorrect(false);
          setIsClicked(true);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [count, running, navigate]);

  const resetCount = () => {
    setCount(COUNT);
    setRunning(true);
  };

  //------------------------------------------------------------------

  useEffect(() => {
    playsound();
  }, [quiz.answer.sound]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleExitPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleExitPress);
    };
  }, []);

  useEffect(() => {
    if (modalVisible) return;
    setRunning(true);
  }, [modalVisible]);
  // useBlockButtonHandler(true);

  const clickedAnswerHandler = (id) => {
    return () => setClickedAnswer(id);
  };

  const checkAnswerHandler = () => {
    if (isClicked) return;
    if (!clickedAnswer) return;
    setRunning(false);

    if (clickedAnswer !== quiz.answer.word) {
      playFailureSound();
      setIsCorrect(false);
      setIsClicked(true);
      console.log("Before: ", quiz.HP);
      dispatch(decreaseHP());
      console.log("After: ", quiz.HP);
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
      setRunning(false);
      navigate.pop();
      navigate.navigate("gameover", { sbj, timer: timer, totalAnswers });
      return;
    }

    if (quiz.currentIteration === NUMBER_OF_QUIZEZ) {
      if (!quiz.isWrong) {
        dispatch(increaseTrophy(sbj));
        dispatch(updateTrophy());
      }
      setRunning(false);
      navigate.pop();
      navigate.navigate("gameover", { sbj, timer: timer, totalAnswers });
      return;
    }
    resetCount();
    dispatch(getQuizHandler());
  };
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={imgSword}
              style={{ width: 170, height: 170, marginBottom: 8 }}
            ></Image>
            <Text
              style={{
                marginBottom: 16,
                fontSize: 26,
                fontWeight: "900",
                color: "#7c3aed",
              }}
            >
              Quitter 😓
            </Text>
            <View style={{ marginBottom: 30, gap: 5 }}>
              <Text style={styles.modalText}>
                Êtes-vous sûr de vouloir quitter?
              </Text>
              <Text style={styles.modalText}>
                Vous perdrez votre progression
              </Text>
            </View>
            <View style={{ width: "100%", gap: 14 }}>
              <TouchableOpacity
                onPress={handleCancelPress}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonConfirm}
                onPress={handleConfirmPress}
              >
                <Text style={styles.modalButtonTextConfirm}>Confirmer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ height: "100%", gap: hp("3%") }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <AnimatedCircularProgress
            size={hp(4)}
            width={hp(0.6)}
            fill={(count * 100) / COUNT}
            tintColor="red"
            backgroundColor="#ccc"
            tintColorSecondary="#22c55e"
          >
            {() => <Text>{count}</Text>}
          </AnimatedCircularProgress>

          <View style={{ flex: 1 }}>
            <UpperBar quiz={quiz} />
          </View>
          <TouchableOpacity onPress={handleExitPress}>
            <Ionicons name="close" size={hp(5)} color="#d2d2d2" />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <TouchableOpacity onPress={playsound} style={styles.imgContainer}>
            <Ionicons name="volume-medium" size={hp(4.5)} color="#f5f3ff" />
          </TouchableOpacity>
          <Text onPress={playsound} style={styles.word}>
            {quiz.answer.word}
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: hp(0.5) }}>
            {[...Array(quiz.initialHP).keys()].map((el, i) => (
              <Image
                style={{ width: hp(4), height: hp(4), resizeMode: "contain" }}
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
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 30,
          paddingHorizontal: 20,
          margin: 0,
          height: hp(14),
        }}
      >
        <AnswerStateModal
          clickedAnswer={clickedAnswer}
          isCorrect={isCorrect}
          isOver={count === 0 ? true : false}
          checkAnswerHandler={checkAnswerHandler}
          nextAnswerHandler={nextAnswerHandler}
        />
      </View>
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

  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 10,
    rowGap: 20,
    marginBottom: hp(12),
    marginHorizontal: 8,
  },

  answer: {
    flexGrow: 1,
    alignItems: "center",
    width: "46.9%",
    borderRadius: 8,
    borderColor: "#d2d2d2",
    borderWidth: 2,
    borderBottomWidth: 4,
  },

  img: {
    resizeMode: "contain",
    width: "68%",
    height: "68%",
  },

  hover: {
    backgroundColor: "rgba(149, 76, 224, 0.1)",
    borderColor: "#7c3aed",
  },

  word: {
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: "#7c3aed",
    borderStyle: "dotted",
    fontSize: hp(2.5),
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
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    width: "80%",
  },
  modalText: {
    fontSize: 15,
    textAlign: "center",
    color: "#777",
  },
  modalButton: {
    padding: 11,
    borderRadius: 50,
    backgroundColor: "#7c3aed",
    borderBottomWidth: 4,
    borderColor: "#6d28d9",
  },
  modalButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  modalButtonConfirm: {
    padding: 11,
    borderRadius: 50,
    backgroundColor: "transparent",
  },

  modalButtonTextConfirm: {
    color: "#495057",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
