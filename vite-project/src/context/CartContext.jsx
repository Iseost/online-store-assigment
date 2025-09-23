// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid"; // trenger å installere uuid-pakken: npm install uuid

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Legger til produkt med unikt cartItemId
  const addToCart = (product) => {
    const cartItem = { ...product, cartItemId: uuidv4() };
    setCart((prevItems) => [...prevItems, cartItem]);
  };

  // Fjerner kun det produktet man trykker på
  const removeFromCart = (cartItemId) => {
    setCart((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
