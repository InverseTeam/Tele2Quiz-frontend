import { createSlice } from "@reduxjs/toolkit";
import {Statuses} from '../../../constant/statuses'


const initialState = {
    user: {},
    isLogged: false,
    status: Statuses.idle,
  };

  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      startLoading: (state, action) => {
        state.status = Statuses.inProgress;
        state.user = {};
        state.isLogged = false; 
        console.log('start')
      },
      successLoading: (state, action) => {
        state.status = Statuses.success;
        state.user = action.payload;
        state.isLogged = true; 
        console.log('success')
      },
      failLoading: (state, action) => {
        state.status = Statuses.failed;
        state.user = {};
        state.isLogged = false; 
        console.log('fail')
      },
    },
  });
  
  export const { user } = userSlice.actions;
  export default userSlice.reducer;