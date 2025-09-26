// src/pages/CheckoutPage.jsx
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6 divide-y">
            {cart.map((item) => (
              <li key={item.cartItemId} className="py-3 flex justify-between">
                <span>{item.title}</span>
                <span>{item.price} NOK</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total:</span>
            <span>{totalPrice} NOK</span>
          </div>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
            <button
              onClick={handleCheckout}
              className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Complete Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
