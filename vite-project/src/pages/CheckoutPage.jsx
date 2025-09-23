// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link
          to="/products"
          className="text-blue-600 underline mt-2 inline-block"
        >
          &larr; Back to Products
        </Link>
      </div>
    );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {cart.map((product, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b py-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image?.url}
                alt={product.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{product.title}</h2>
                <p>${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.cartItemId)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4">
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Continue Shopping
        </Link>

        <Link
          to="/checkout-success"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Complete Checkout
        </Link>
      </div>
    </div>
  );
}
