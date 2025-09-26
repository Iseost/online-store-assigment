// src/pages/CheckoutSuccessPage.jsx
import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded text-center">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        🎉 Checkout Successful!
      </h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your order is being processed.
      </p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
