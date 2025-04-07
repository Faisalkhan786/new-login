import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../api/apiClient";


//Async registerUser Action for name: register
export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ name, email, password, avatar }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("users/", {
        name,
        email,
        password,
        avatar: avatar || "https://via.placeholder.com/150"
      });
      console.log("Response Data: ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false,
          state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default registerSlice.reducer;