import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSports = createAsyncThunk(
  "reducers/fetchTrending",
  async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=a95b18d0b5d847099060c37bd0726fd3"
    );
    return response.data.articles;
  }
);

const initialState = {
  sports: [],
  currentArticle: {},
  status: "idle",
  error: null,
};
const sportsSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {
    sportsAdded: {
      reducer(state, action) {
        state.sports.push(action.payload);
      },
      // prepare(title) {},
    },
    // currentFind: {
    //   reducer(state, action) {
    //     let foundCurrent = state.trending.forEach(
    //       (trending) => (trending.title = action.title)
    //     );
    //     if (foundCurrent != null) {
    //       state.trending.currentArticle = foundCurrent;
    //     } else {
    //       return state;
    //     }
    //   },
    // },
  },
  extraReducers: {
    [fetchSports.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSports.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched posts to the array
      state.sports = state.sports.concat(action.payload);
    },
    [fetchSports.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllSports = (state) => state.sports.sports;

export const { sportsAdded } = sportsSlice.actions;

export default sportsSlice.reducer;
