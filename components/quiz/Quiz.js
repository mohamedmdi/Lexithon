import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { getQuizHandler, init } from "../../store/quizSlice";
import Body from "../layout/Body";
import LoadingContent from "../layout/LoadingContent";
import Content from "./Content";

const Quiz = (props) => {
  const quiz = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init({ sbj: props.route.params.id }));
    dispatch(getQuizHandler());
  }, [init, getQuizHandler]);

  return (
    <>
      <Body statusBarColor="#f5f3ff">
        {!quiz.answer ? <LoadingContent /> : <Content quiz={quiz} sbj= {props.route.params.id}/>}
      </Body>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
