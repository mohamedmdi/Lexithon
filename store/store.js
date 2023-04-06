import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";
import userSlice from "./userSlice";
import notifSlice from "./notifSlice"

export const store = configureStore({
    reducer: {user: userSlice, quiz: quizSlice, notif: notifSlice},
})