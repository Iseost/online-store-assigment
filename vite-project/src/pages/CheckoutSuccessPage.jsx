// src/pages/CheckoutSuccessPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">
        ✅ Checkout Complete!
      </h1>
      <p className="mb-6 text-gray-700">
        Thank you for your purchase. Your order has been successfully placed.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Continue Shopping
        </Link>

        <Link
          to="/orders"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
}
