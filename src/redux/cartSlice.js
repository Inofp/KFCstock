import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, thunkAPI) => {
    const response = await axios.get('/api/cart', { params: { userId } });
    return response.data.cartItems;
  }
);

export const updateCartItems = createAsyncThunk(
  'cart/updateCartItems',
  async ({ userId, cartItems }, thunkAPI) => {
    await axios.post('/api/cart', { userId, cartItems });
    return cartItems;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity === 1) {
        return state.filter(item => item.id !== action.payload.id);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
