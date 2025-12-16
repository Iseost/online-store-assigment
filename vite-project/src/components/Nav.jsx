import { Link } from "react-router-dom";

/**
 * Primary site navigation links.
 * @returns {JSX.Element}
 */
export function Nav() {
  return (
    <nav className="flex gap-6">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact us
      </Link>
    </nav>
  );
}
