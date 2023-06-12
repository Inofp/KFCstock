import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async ({userId}) => {
    const response = await axios.get('/api/favorites', { params: { userId } });
    return response.data.favorites;
  }
);

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async ({ userId, productId }) => {
    await axios.post('/api/favorites', { userId, productId });
    return productId;
  }
);

export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  async ({ userId, productId }) => {
    await axios.delete(`/api/favorites`, { params: { userId, productId } });
    return productId;
  }
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        return state.filter((itemId) => itemId !== action.payload);
      });
  },
});

export default favoritesSlice.reducer;
