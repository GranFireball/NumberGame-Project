import { createSlice } from "@reduxjs/toolkit";

export const lifeSlicer = createSlice({
  name: "lifesCounter",
  initialState: {
    value: 3
  },
  reducers: {
    decrementLife: (state) => {
      state.value -= 1;
    },
    fullLife: (state) => {
      state.value = lifeSlicer.getInitialState().value;
    }
  }
})

export const {decrementLife, fullLife} = lifeSlicer.actions;

export default lifeSlicer.reducer;