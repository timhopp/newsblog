import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentArticle: {},
};
const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    currentAdded: {
      reducer(state, action) {
        state.currentArticle.push(action.payload);
      },
      // prepare(title) {},
    },
  },
});

export const selectCurrentArticle = (state) =>
  state.currentarticle.currentarticle;

// export const { trendingAdded } = trendingSlice.actions;

export default currentSlice.reducer;
