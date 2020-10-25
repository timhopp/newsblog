import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWorldNews = createAsyncThunk(
  "reducers/fetchWorldNews",
  async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=world&apiKey=a95b18d0b5d847099060c37bd0726fd3"
    );
    return response.data.articles;
  }
);

const initialState = {
  worldnews: [],
  status: "idle",
  error: null,
};
const worldnewsSlice = createSlice({
  name: "worldnew",
  initialState,
  reducers: {
    worldnewsAdded: {
      reducer(state, action) {
        state.worldnews.push(action.payload);
      },
      // prepare(title) {},
    },
  },
  extraReducers: {
    [fetchWorldNews.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchWorldNews.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched posts to the array
      state.worldnews = state.worldnews.concat(action.payload);
    },
    [fetchWorldNews.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllWorldNews = (state) => state.worldnews.worldnews;

export const { worldnewsAdded } = worldnewsSlice.actions;

export default worldnewsSlice.reducer;
