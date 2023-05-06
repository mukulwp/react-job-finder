import { configureStore } from "@reduxjs/toolkit";
import JobsReducer from "../features/jobs/JobsSlice";

export const store = configureStore({
  reducer: {
    jobs: JobsReducer,
  },
});
