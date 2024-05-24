import { createSlice } from "@reduxjs/toolkit";

export const pointsSlicer = createSlice({
  name: "pointsCounter",
  initialState: {
    value: 0
  },
  reducers: {
    incrementPoints: (state, action) => {
      state.value += action.payload;
    },
    zeroPoints: (state) => {
      state.value = pointsSlicer.getInitialState().value;
    }
  }
})

export const {incrementPoints, zeroPoints} = pointsSlicer.actions;

export default pointsSlicer.reducer;