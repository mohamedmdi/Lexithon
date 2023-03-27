import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  grade: null,
  trophy: 0
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload.username;
      state.grade = action.payload.grade;
    },

    addGrade: (state, action) => {
      state.grade = action.payload;
    },

    clearUser: (state, action) => {
      state.username = null;
      state.grade = null;
    },
    increaseTrophy: (state, action)=> {
      state.trophy +=1
    }
  },
});

// Action creators are generated for each case reducer function
export const { addUser, addGrade, clearUser, increaseTrophy } = userSlice.actions;

export default userSlice.reducer;
