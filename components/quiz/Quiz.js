import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Body from "../layout/Body";
import CardPressable from "../layout/CardPressable";
import volume from "../../assets/volume.png";
import { Button } from "react-native-paper";
import img from "../../assets/award.png";
import useSound from "../../hooks/useSound";
import { useState, useCallback, useEffect } from "react";
import newa from "../../store/data";
import { useDispatch, useSelector } from "react-redux";
import { getQuizHandler, init } from "../../store/quizSlice";

const Quiz = (props) => {
  const [clickedAnswer, setClickedAnswer] = useState(null);
  const quiz = useSelector(state => state.quiz)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(init({sbj: props.route.params.id}))
    dispatch(getQuizHandler())
  }, [dispatch, init, getQuizHandler])
  // const playsound = useSound(quiz?.answer?.sound);
  
  const clickedAnswerHandler = (id) => {
    return () => setClickedAnswer(id)
  };

  return (
    <>
      <Body statusBarColor="#f5f3ff">
        {/* <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity onPress={playsound} style={styles.imgContainer}>
              <Image
                source={volume}
                style={{ tintColor: "#f5f3ff", width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <Text>Hi {props.route.params.id}</Text>
            <Text style={styles.word}>{quiz?.answer?.word}</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.quizWrapper}>
              <CardPressable
                onPress={clickedAnswerHandler(1)}
                style={
                  clickedAnswer === 1
                    ? { padding: 0, ...styles.hover }
                    : { padding: 0 }
                }
              >
                <Image style={styles.img} source={quiz.results.length > 0 ? quiz.results[0] : volume}></Image>
              </CardPressable>
              <CardPressable
                onPress={clickedAnswerHandler(2)}
                style={
                  clickedAnswer === 2
                    ? { padding: 0, ...styles.hover }
                    : { padding: 0 }
                }
              >
                <Image style={styles.img} source={quiz.results.length > 0 ? quiz.results[1] : volume}></Image>
              </CardPressable>
            </View>
            <View style={styles.quizWrapper}>
              <CardPressable
                onPress={clickedAnswerHandler(3)}
                style={
                  clickedAnswer === 3
                    ? { padding: 0, ...styles.hover }
                    : { padding: 0 }
                }
              >
                <Image style={styles.img} source={quiz.results.length > 0 ? quiz.results[2] : volume}></Image>
              </CardPressable>
              <CardPressable
                onPress={clickedAnswerHandler(4)}
                style={
                  clickedAnswer === 4
                    ? { padding: 0, ...styles.hover }
                    : { padding: 0 }
                }
              >
                <Image style={styles.img} source={quiz.results.length > 0 ? quiz.results[3] : volume}></Image>
              </CardPressable>
            </View>
          </View>
          <Button
            style={{
              backgroundColor: "#7c3aed",
              backgroundColor: "#7c3aed",
              borderBottomWidth: 4,
              borderColor: "#6d28d9",
            }}
            mode="contained"
            onPress={() => {}}
          >
            Check{" "}
          </Button>
        </View> */}
      </Body>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    height: "100%",
    gap: 20,
  },

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
    padding: 8,
  },

  img: {
    resizeMode: "contain",
    width: "70%",
    
  },

  body: {
    padding: 5,
    flex: 1,
    gap: 20,
  },

  quizWrapper: {
    flexDirection: "row",
    flex: 1,
    gap: 10,
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
