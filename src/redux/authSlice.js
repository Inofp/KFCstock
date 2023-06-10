import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const login = createAsyncThunk(
  "auth/login",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await axios.post("/api/login", { login, password });
      const { accessToken, refreshToken, user } = res.data;
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/api/register', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  registrationStatus: 'idle',
  registrationError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.registrationStatus = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registrationStatus = 'succeeded';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registrationStatus = 'failed';
        state.registrationError = action.error.message;
      });
  },
});

export default authSlice.reducer;
