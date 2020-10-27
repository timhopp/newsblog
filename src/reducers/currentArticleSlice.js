import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentArticle: [],
  favArticles: [],
};
const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    // currentAdded: {
    //   reducer(state, action) {
    //     state.currentArticle.push(action.payload);
    //   },
    //   // prepare(title) {},
    // },
    currentFind: {
      reducer(state, action) {
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
    addToFav: {
      reducer(state, action) {
        state.favArticles = state.favArticles.concat(action.payload);
      },
    },
  },
});

export const selectCurrentArticle = (state) =>
  state.currentarticle.currentArticle[0];

export const selectAllFavs = (state) => state.currentarticle.favArticles;
export const { currentFind, addToFav } = currentSlice.actions;

export default currentSlice.reducer;
