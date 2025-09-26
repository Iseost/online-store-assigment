// src/pages/CheckoutPage.jsx
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, clearCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded text-[#3B322F]">
      <h1 className="text-2xl font-bold mb-6 text-[#3B322F]">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6 divide-y text-[#3B322F]">
            {cart.map((item) => (
              <li
                key={item.cartItemId}
                className="py-3 flex items-center gap-4"
              >
                <img
                  src={item.image?.url}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>{item.title}</span>
                <span>{item.price} NOK</span>
                <button
                  onClick={() => removeFromCart(item.cartItemId)}
                  className="text-sm font-semibold text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between font-semibold text-lg mb-6 text-[#3B322F]">
            <span>Total:</span>
            <span>{totalPrice} NOK</span>
          </div>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="flex-1 text-center bg-[#F2A65A] hover:bg-[#E6893B] text-white py-2 rounded"
            >
              Continue Shopping
            </Link>
            <button
              onClick={handleCheckout}
              className="flex-1 bg-[#F28B82] hover:bg-[#E66B5C] text-white py-2 rounded"
            >
              Complete Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
