import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchwordSlice from "./searchwordSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    searchword: searchwordSlice,
  },
});
export default store;
