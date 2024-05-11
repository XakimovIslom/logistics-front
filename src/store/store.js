// Import necessary dependencies
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import FormData from "form-data";
const token = localStorage.getItem("token");

let data = new FormData();
data.append("username", "elyorkhan1997");
data.append("password", "elyor1997");

const axiosInstance = axios.create({
  baseURL: "https://admin.hightargetgroup.uz",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Create an async thunk to fetch data from the endpoint
export const fetchData = createAsyncThunk("data/fetchData", async (path) => {
  try {
    const response = await axiosInstance.get(`/${path}`);
    return response.data;
  } catch (error) {
    throw Error("Error fetching data");
  }
});

// Create a slice to handle the state and reducers
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the action creators
export const dataActions = dataSlice.actions;

// Export the reducer
export const dataReducer = dataSlice.reducer;

// Configure the Redux store
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// Export the store
export default store;
