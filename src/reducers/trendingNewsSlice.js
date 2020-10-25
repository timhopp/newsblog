import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrending = createAsyncThunk(
  "reducers/fetchTrending",
  async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=22221f62f9584a0d8654a29cadc834a8"
    );
    return response.data.articles;
  }
);

const initialState = {
  trending: [],
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
      // prepare(title) {},
    },
  },
  extraReducers: {
    [fetchTrending.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTrending.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched posts to the array
      state.trending = state.trending.concat(action.payload);
    },
    [fetchTrending.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllTrending = (state) => state.trending.trending;

export const { trendingAdded } = trendingSlice.actions;

export default trendingSlice.reducer;
