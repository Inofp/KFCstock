import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartItems, setCartItems] = useState([]);

  const expirationTime = 1000000000;

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  const changeQuantity = (item, quantity) => {
    const newCartItems = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
    );
  
    setCartItems(newCartItems);
  
    if (quantity === 0) {
      removeFromCart(item);
    }
  };

  const makeTest = (item, quantity) => {
    console.log(cartItems);
  };

  useEffect(() => {
    const now = new Date().getTime();
    if (cartItems?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartItems));
      ls?.setItem("cartExpiration", now + expirationTime);
    }
  }, [cartItems]);

  useEffect(() => {
    const expiration = ls?.getItem("cartExpiration");
    const now = new Date().getTime();
    if (expiration && now > expiration) {
      ls?.removeItem("cart");
      ls?.removeItem("cartExpiration");
    }
  }, []);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartItems(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity, makeTest }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
