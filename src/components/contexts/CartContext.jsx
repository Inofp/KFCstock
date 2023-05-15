import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartItems, setCartItems] = useState([]);

  // время жизни корзины в миллисекундах (3 часа)
  const expirationTime = 3 * 60 * 60 * 1000;

  // добавление элемента в корзину
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // удаление элемента из корзины
  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
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

  // тестовая функция
  const makeTest = (item, quantity) => {
    console.log(cartItems);
  };

  // сохранение состояния корзины в localStorage
  useEffect(() => {
    const now = new Date().getTime();
    if (cartItems?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartItems));
      ls?.setItem("cartExpiration", now + expirationTime);
    }
  }, [cartItems]);

  // удаление данных из localStorage при истечении срока действия
  useEffect(() => {
    const expiration = ls?.getItem("cartExpiration");
    const now = new Date().getTime();
    if (expiration && now > expiration) {
      ls?.removeItem("cart");
      ls?.removeItem("cartExpiration");
    }
  }, []);

  // получение состояния корзины из localStorage при монтировании компонента
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
