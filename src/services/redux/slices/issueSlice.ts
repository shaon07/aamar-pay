import { createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
  issueLists: any[];
  cachedIssues: any[];
};

export const initialState: initialStateType = {
  issueLists: [],
  cachedIssues: [],
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    storeIssueList: (state, action) => {
      state.issueLists = action.payload;
      state.cachedIssues = action.payload;
    },
    filterIssueListByDate: (state) => {
      // sort array of an object by created_at in ascending order
      state.issueLists = state.cachedIssues.sort(
        (a: any, b: any) =>
          Number(new Date(a.created_at)) - Number(new Date(b.created_at))
      );
    },
    filterByMostComments: (state) => {
      state.issueLists = state.cachedIssues.sort(
        (a: any, b: any) => b.comments - a.comments
      );
    },
    filterIssueListByContribute: (state) => {
      state.issueLists = state.cachedIssues.filter(
        (issue) => issue.author_association === "CONTRIBUTOR"
      );
    },
  },
});

export const {
  storeIssueList,
  filterIssueListByDate,
  filterByMostComments,
  filterIssueListByContribute,
} = issueSlice.actions;
export default issueSlice.reducer;
