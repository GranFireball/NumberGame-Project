import { createSlice } from "@reduxjs/toolkit";

export const attemptsSlicer = createSlice({
  name: "attemptsCounter",
  initialState: {
    value: [{
      id: 1,
      answer: undefined
    }]
  },
  reducers: {
    incrementAttempt: (state) => {
      state.value.push({id: state.value.length + 1, answer: undefined});
    },
    clearAttempts: (state) => {
      state.value = [];
    },
    answerAttempt: (state, action) => {
      let newState = [];
      for(let attempt of state.value){
        if(attempt.id === state.value.length){
          attempt.answer = action.payload;
        }
        newState.push(attempt);
      }
      state.value = newState;
    }
  }
})

export const {incrementAttempt, clearAttempts, answerAttempt} = attemptsSlicer.actions;

export default attemptsSlicer.reducer;