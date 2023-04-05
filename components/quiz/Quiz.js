import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { getQuizHandler, init } from "../../store/quizSlice";
import Body from "../layout/Body";
import LoadingContent from "../layout/LoadingContent";
import Content from "./Content";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useState } from "react";

const Quiz = (props) => {
  const quiz = useSelector((state) => state.quiz);
  const [timer, setTimerr] = useState(Date.now());
  const [totalAnswers, setTotalAnswers] = useState(0);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(init({ sbj: props.route.params.id }));
      dispatch(getQuizHandler());
      setTimerr(Date.now());
      setTotalAnswers(0);
    }, [init, getQuizHandler])
  );

  return (
    <>
      <Body statusBarColor="#f5f3ff">
        {!quiz.answer ? (
          <LoadingContent />
        ) : (
          <Content
            quiz={quiz}
            sbj={props.route.params.id}
            timer={timer}
            setTotalAnswers={setTotalAnswers}
            totalAnswers={totalAnswers}
          />
        )}
      </Body>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
