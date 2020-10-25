import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrending = createAsyncThunk(
  "reducers/fetchTrending",
  async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a95b18d0b5d847099060c37bd0726fd3"
    );
    return response.data.articles;
  }
);

const initialState = {
  trending: [],
  currentArticle: [],
  status: "idle",
  error: null,
};
const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    trendingAdded: {
      reducer(state, action) {
        state.trending.push(action.payload);
      },
      // prepare(title, description, img) {},
    },
  },
  extraReducers: {
    [fetchTrending.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTrending.fulfilled]: (state, action) => {
      state.status = "succeeded";
      debugger;
      // Add any fetched posts to the array
      state.trending = state.trending.concat(action.payload);

      console.log(state.currentArticle);
    },
    [fetchTrending.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllTrending = (state) => state.trending.trending;

export const selectCurrentArticle = (state) => state.trending.currentarticle[0];

export const { trendingAdded, currentFind } = trendingSlice.actions;

export default trendingSlice.reducer;
