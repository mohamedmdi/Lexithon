import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const initialState = {
  answers: [],
  data,
  choices: [],
  answer: null,
  isWrong: false,
  results: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    init: (state, action) => {
      const newArr = [];
      var arr = [];
      for (let i = 0; i < 3; i++) {
        console.log("WRITTEN");
        if (i === 0)
          arr = data.find((el) => el.sbj === action.payload.sbj).data;
        console.log(arr)
        const randomIndex = Math.floor(Math.random() * arr.length);
        // newArr.push(arr.splice(randomIndex, 1)[0]);
    }
    console.log(arr.splice(0, 1))

    //   state.choices = [...data.find((el) => el.sbj === action.payload.sbj).data];
    //   state.answers = newArr;
    //   console.log(state.answers);

    //   state.answer = null;
    //   state.isWrong = false;
    },

    getQuizHandler: (state, action) => {
    //   const shuffleArr = (arr) => {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = arr[i];
    //       arr[i] = arr[j];
    //       arr[j] = temp;
    //     }
    //     return arr;
    //   };
    //   state.answer = state.answers.splice(0, 1);

    //   const choices = [
    //     ...state.choices.filter((el) => el.word !== state.answer.word),
    //   ];

    //   for (let i = 0; i < 3; i++) {
    //     const randomIndex = Math.floor(Math.random() * choices.length);
    //     state.results.push(choices.splice(randomIndex, 1)[0]);
    //   }

    //   state.results.push(state.answer);
    //   state.results = shuffleArr(state.results);
    },
  },
});

// Action creators are generated for each case reducer function
export const { init, getQuizHandler } = quizSlice.actions;

export default quizSlice.reducer;
