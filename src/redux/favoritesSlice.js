import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
  },
});

export const { setFavorites, addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
