import { createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
  pageSize: number;
  currentPage: number;
};

export const initialState: initialStateType = {
  pageSize: 10,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPageSize, setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
