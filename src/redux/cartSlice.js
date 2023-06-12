import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId) => {
    const response = await axios.get('/api/cart', { params: { userId } });
    return response.data.cartItems;
  }
);

export const updateCartItems = createAsyncThunk(
  'cart/updateCartItems',
  async ({ userId, cartItems }) => {
    await axios.post('/api/cart', { userId, cartItems });
    return cartItems;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, item }, { getState }) => {
    const { cart } = getState();
    const newCart = [...cart, item];
    await axios.post('/api/cart', { userId, cartItems: newCart });
    return newCart;
  }
);

export const increaseQuantity = createAsyncThunk(
  'cart/increaseQuantity',
  async ({ userId, itemId }, { getState }) => {
    const { cart } = getState();

    const newCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );

    await axios.post('/api/cart', { userId, cartItems: newCart });
    return newCart;
  }
);

export const decreaseQuantity = createAsyncThunk(
  'cart/decreaseQuantity',
  async ({ userId, itemId }, { getState }) => {
    const { cart } = getState();

    const newCart = cart
      .map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => !(item.id === itemId && item.quantity === 1));

    await axios.post('/api/cart', { userId, cartItems: newCart });
    return newCart;
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, itemId }, { getState }) => {
    const { cart } = getState();

    const newCart = cart.filter(item => item.id !== itemId);

    await axios.post('/api/cart', { userId, cartItems: newCart });
    return newCart;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        console.log('addcase prob');
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        console.log('addcase prob');
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        console.log('addcase prob');
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(increaseQuantity.rejected, (state, action) => {
        console.log('addcase prob');
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(decreaseQuantity.rejected, (state, action) => {
        console.log('addcase prob');
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        console.log('addcase prob');
      });
  },
});

export default cartSlice.reducer;
