import { createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
  issueLists: any[];
};

export const initialState: initialStateType = {
  issueLists: [],
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    storeIssueList: (state, action) => {
      state.issueLists = action.payload;
    },
  },
});

export const { storeIssueList } = issueSlice.actions;
export default issueSlice.reducer;
