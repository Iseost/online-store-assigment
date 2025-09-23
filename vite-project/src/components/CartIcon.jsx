// src/components/CartIcon.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Link to="/cart" className="relative cursor-pointer text-xl">
      🛒
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
