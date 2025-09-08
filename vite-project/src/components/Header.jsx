import { Nav } from "./Nav";
import { CartIcon } from "./CartIcon";

export default function Header() {
  return (
    <header>
      <h1>The online shop!</h1>
      <Nav />
      <CartIcon />
    </header>
  );
}
