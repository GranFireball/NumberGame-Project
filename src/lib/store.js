import { configureStore } from "@reduxjs/toolkit";
import attemptsCounterReducer from "@/lib/features/attemptSlicer";
import lifesCounterReducer from "@/lib/features/lifeSlicer";
import pointsCounterReducer from "@/lib/features/pointSlicer";
import roundsCounterReducer from "@/lib/features/roundSlicer";

export default configureStore({
  reducer: {
    attemptsCounter: attemptsCounterReducer,
    lifesCounter: lifesCounterReducer,
    pointsCounter: pointsCounterReducer,
    roundsCounter: roundsCounterReducer
  }
})