import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../data/data";
export const updateTrophies = createAsyncThunk("user/update", async (state) => {
  const response = await storeData({
    username: state.username,
    grade: state.grade,
    trophy: state.trophy,
    gender: state.gender,
  });
  return response;
});
const initialState = {
  username: null,
  grade: null,
  trophy: {
    school: 0,
    home: 0,
    kitchen: 0,
    animals: 0,
    body: 0,
    sport: 0,
  },
  gender: null,
  updatedUser: {
    username: null,
    grade: null,
    gender: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload.username;
      state.grade = action.payload.grade;
      state.gender = action.payload.gender;
    },

    addGrade: (state, action) => {
      state.grade = action.payload;
    },

    addGender: (state, action) => {
      state.gender = action.payload;
    },

    clearUser: (state, action) => {
      state.username = null;
      state.grade = null;
      (state.trophy = {
        school: 0,
        home: 0,
        kitchen: 0,
        animals: 0,
        body: 0,
        sport: 0,
      }),
        (state.gender = null);
    },
    increaseTrophy: (state, action) => {
      state.trophy[action.payload] += 1;
    },
    editUsername: (state, action) => {
      state.updatedUser.username = action.payload;
    },

    editGender: (state, action) => {
      state.updatedUser.gender = action.payload;
    },

    editGrade: (state, action) => {
      state.updatedUser.grade = action.payload;
    },

    updateUserInfo: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        if (!action.payload[key] || state[key] === action.payload[key]) return;
        state[key] = action.payload[key];
        console.log(state[key]);
      });

      state.updatedUser = { username: null, grade: null, gender: null };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUser,
  clearUser,
  increaseTrophy,
  updateUserInfo,
  editUsername,
  editGrade,
  editGender,
} = userSlice.actions;

export default userSlice.reducer;
