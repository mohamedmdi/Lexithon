import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadDataFromStorage = createAsyncThunk(
  'notifSlice/loadDataFromStorage',
  async () => {
    const data = await AsyncStorage.getItem("notif");
    // console.log("Notif Slice: ", JSON.parse(data))
    return JSON.parse(data);
  }
);

const initialState = {
  isActive: true,
  loading: false,
};

export const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setIsActive: (state, action) => {
      state.isActive = !state.isActive;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadDataFromStorage.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadDataFromStorage.fulfilled, (state, action) => {
        state.loading = false;
        state.isActive = action.payload;
      })
      .addCase(loadDataFromStorage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

// Action creators are generated for each case reducer function
export const { setIsActive, setNotificationListener, setResponseListener } =
  notifSlice.actions;

export default notifSlice.reducer;
