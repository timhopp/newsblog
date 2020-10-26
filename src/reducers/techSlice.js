import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTech = createAsyncThunk("reducers/fetchTech", async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/everything?q=technology&apiKey=a95b18d0b5d847099060c37bd0726fd3"
  );
  return response.data.articles;
});

const initialState = {
  tech: [],
  status: "idle",
  error: null,
};
const techSlice = createSlice({
  name: "tech",
  initialState,
  reducers: {
    techAdded: {
      reducer(state, action) {
        state.tech.push(action.payload);
      },
      // prepare(title) {},
    },
    // currentFind: {
    //   reducer(state, action) {
    //     let foundCurrent = state.tech.forEach(
    //       (tech) => (tech.title = action.title)
    //     );
    //     if (foundCurrent != null) {
    //       state.tech.currentArticle = foundCurrent;
    //     } else {
    //       return state;
    //     }
    //   },
    // },
  },
  extraReducers: {
    [fetchTech.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTech.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched posts to the array
      let filtered = action.payload.filter((art) => art.urlToImage !== null);
      state.tech = state.tech.concat(filtered);
    },
    [fetchTech.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllTech = (state) => state.tech.tech;

export const { techAdded } = techSlice.actions;

export default techSlice.reducer;
