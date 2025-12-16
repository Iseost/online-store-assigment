// src/pages/CheckoutSuccessPage.jsx
import { Link } from "react-router-dom";

/**
 * Confirmation page shown after a successful checkout.
 * Provides a link back to products.
 * @returns {JSX.Element}
 */
export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded text-center">
      <h1 className="text-2xl font-bold text-[#3B322F] mb-4">
        🎉 Checkout Successful!
      </h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your order is being processed.
      </p>
      <Link
        to="/products"
        className="bg-[#F2A65A] hover:bg-[#E6893B] text-white font-semibold px-6 py-2 rounded"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
