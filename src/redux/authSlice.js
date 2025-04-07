import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../api/apiClient";

//Async loginUser action created of redux name: auth
export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await apiClient.post("auth/login", { email, password });
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data?.message || "Login failed");
		}
	}
);
const authSlice = createSlice({
	name: 'auth',
	initialState: { token: null, loading: false, error: null },

	reducers: {
		logout: (state) => {
			state.token = null;
			localStorage.removeItem("token");
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.token = action.payload.access_token;
				localStorage.setItem("token", action.payload.access_token);
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
	}
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;