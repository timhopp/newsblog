import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSports = createAsyncThunk(
  "reducers/fetchSports",
  async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=22221f62f9584a0d8654a29cadc834a8"
    );
    return response.data.articles;
  }
);

const initialState = {
  sports: [],
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
  },
  extraReducers: {
    [fetchSports.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSports.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched posts to the array
      let filtered = action.payload.filter((art) => art.urlToImage !== null);
      state.sports = state.sports.concat(filtered);
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
