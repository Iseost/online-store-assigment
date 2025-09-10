export function CartIcon({ cartCount = 0 }) {
  return (
    <div className="relative cursor-pointer text-xl">
      🛒
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
          {cartCount}
        </span>
      )}
    </div>
  );
}
