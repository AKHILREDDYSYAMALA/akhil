import { createSlice } from "@reduxjs/toolkit";

const searchwordSlice = createSlice({
  name: "searchword",
  initialState: {
    searchword: "",
  },
  reducers: {
    assignsearchword: (state, action) => {
      state.searchword = action.payload;
    },
  },
});

export const { assignsearchword } = searchwordSlice.actions;
export default searchwordSlice.reducer;
