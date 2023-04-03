import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  grade: null,
  trophy: 0,
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
      state.trophy = 0;
    },

    clearUser: (state, action) => {
      state.username = null;
      state.grade = null;
      state.gender = null;
    },
    increaseTrophy: (state, action) => {
      state.trophy += 1;
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
  increaseTrophyr,
  updateUserInfo,
  editUsername,
  editGrade,
  editGender,
} = userSlice.actions;

export default userSlice.reducer;
