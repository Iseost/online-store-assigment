import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/contact">Contact us</Link>
    </nav>
  );
}
