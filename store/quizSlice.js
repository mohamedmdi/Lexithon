import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";
import NUMBER_OF_QUIZEZ from "../util/numberOfQuiz";

const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

const initialState = {
  answers: [],
  data,
  choices: [],
  answer: null,
  isWrong: false,
  results: [],
  currentIteration: 0,
  initialHP: 3,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    init: (state, action) => {
      const newArr = [];
      let arr = [];
      for (let i = 0; i < NUMBER_OF_QUIZEZ; i++) {
        if (i === 0)
          arr = [...data.find((el) => el.category === action.payload.sbj).data];
        const randomIndex = Math.floor(Math.random() * arr.length);
        newArr.push(arr.splice(randomIndex, 1)[0]);
      }

      state.choices = [
        ...data.find((el) => el.category === action.payload.sbj).data,
      ];
      state.answers = newArr;
      state.answer = null;
      state.isWrong = false;
      state.results = [];
      state.currentIteration = 0;
      state.HP = state.initialHP;
    },
    clearQuiz: (state, action) => {
      state.answers = [];
      state.data = data;
      state.choices = [];
      state.answer = null;
      state.isWrong = false;
      state.results = [];
      state.currentIteration = 0;
      state.initialHP = 3;
    },
    getQuizHandler: (state, action) => {
      state.answer = null;
      state.results = [];
      state.currentIteration = state.currentIteration + 1;
      if (state.currentIteration > NUMBER_OF_QUIZEZ) return;

      state.answer = state.answers.splice(0, 1)[0];
      const choices = [
        ...state.choices.filter((el) => el.word !== state.answer.word),
      ];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * choices.length);
        state.results.push(choices.splice(randomIndex, 1)[0]);
      }
      state.results.push(state.answer);
      state.results = shuffleArr(state.results);
    },

    decreaseHP: (state, action) => {
      if (state.HP === 0) return;
      state.HP -= 1;
      state.isWrong = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { init, getQuizHandler, decreaseHP, clearQuiz } = quizSlice.actions;

export default quizSlice.reducer;
