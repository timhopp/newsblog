import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentArticle: [],
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
    currentFind: {
      reducer(state, action) {
        debugger;
        let foundCurrent = [];
        foundCurrent.push(action.payload);
        if (foundCurrent != null) {
          state.currentArticle = [];
          state.currentArticle = state.currentArticle.concat(foundCurrent);
          console.log(JSON.stringify(state.currentArticle[0]));
        } else {
          console.log("could not find HUH");
        }
      },
    },
  },
});

export const selectCurrentArticle = (state) =>
  state.currentarticle.currentArticle[0];

export const { currentFind } = currentSlice.actions;

export default currentSlice.reducer;
