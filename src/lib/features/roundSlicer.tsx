import { createSlice } from "@reduxjs/toolkit";

export const roundSlicer = createSlice({
  name: "roundsCounter",
  initialState: {
    value: 1
  },
  reducers: {
    incrementRound: (state) => {
      state.value += 1;
    },
    firstRound: (state) => {
      state.value = roundSlicer.getInitialState().value;
    }
  }
})

export const {incrementRound, firstRound} = roundSlicer.actions;

export default roundSlicer.reducer;
