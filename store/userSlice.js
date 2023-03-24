import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  grade: null,
  achievements: [
    { subject: "fr", nbr: 0 },
    { subject: "ar", nbr: 0 },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state = { ...action.payload };
      console.log("STATE: ", state);
    },

    addGrade: (state, action) => {
      state.grade = action.payload;
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, addGrade } = userSlice.actions;

export default userSlice.reducer;
