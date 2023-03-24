import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {user: userSlice, quiz: quizSlice},
})