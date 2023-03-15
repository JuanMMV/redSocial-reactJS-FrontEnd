import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice";
import modalReducer from "../features/modalState/modalSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    modalState: modalReducer,
  },
});
