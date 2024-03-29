import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/counterSlice";
import issueReducer from "../redux/slices/issueSlice";
import paginationReducer from "../redux/slices/pagenationSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    issueReducer,
    paginationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
