import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../../constant/statuses';

const initialState = {
  allTests: [],
  status: Statuses.idle,
};

export const allTestSlice = createSlice({
  name: 'allTests',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.status = Statuses.inProgress;
      state.allTests = [];
      console.log(state.status);
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.allTests = action.payload;
      console.log(state.status);
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
      state.allTests = [];
      console.log(state.status);
    },
    addOneCourse: (state, action) => {
      state.status = Statuses.success;
      state.allTests = action.payload;
      console.log(state.status);
    },
  },
});

export const { allTests } = allTestSlice.actions;
export default allTestSlice.reducer;