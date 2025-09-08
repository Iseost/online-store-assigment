import { useState } from "react";

export function CartIcon() {
  const [cartCount] = useState(); // TODO: make the cart update when items are added

  return (
    <div>
      🛒
      <span>{cartCount}</span>
    </div>
  );
}
