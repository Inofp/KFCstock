import React, { createContext, useState, useEffect } from "react";
import cookie from 'js-cookie';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // добавление элемента в корзину
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // удаление элемента из корзины
  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
  };

  // изменение количества элементов в корзине
  const changeQuantity = (item, quantity) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);

    if (quantity === 0) {
      removeFromCart(item);
      item.quantity = 1;
    }
  };

  const makeTest = (item, quantity) => {
    console.log(cartItems);
  }

  // сохранение состояния корзины в cookies
  useEffect(() => {
    cookie.set('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // загрузка состояния корзины из cookies при инициализации
  useEffect(() => {
    const cartData = cookie.get('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQuantity, makeTest }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
