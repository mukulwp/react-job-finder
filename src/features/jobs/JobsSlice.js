import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobs } from "./JobsAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  searchText: "",
  sortText: "Default",
};

//async thunk

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

export const createJob = createAsyncThunk("jobs/createJob", async (data) => {
  const job = await addJob(data);
  return job;
});

export const changeJob = createAsyncThunk(
  "jobs/changeJob",
  async ({ id, data }) => {
    const job = await editJob(id, data);
    return job;
  }
);

export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {
  const job = await deleteJob(id);
  return job;
});

//create slice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    searchJob: (state, action) => {
      state.searchText = action.payload;
    },

    sortJob: (state, action) => {
      state.sortText = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isLoading = false;

        const indexToUpdate = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;

export const {searchJob, sortJob} = jobsSlice.actions;
