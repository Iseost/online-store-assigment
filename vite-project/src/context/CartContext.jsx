// src/context/CartContext.jsx
import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        { ...action.payload, cartItemId: uuidv4() }, // unik id for hver forekomst
      ];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.cartItemId !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (cartItemId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: cartItemId });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartCount }}
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
