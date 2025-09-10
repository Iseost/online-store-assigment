import { Nav } from "./Nav";
import { CartIcon } from "./CartIcon";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">The online shop!</h1>

      <div className="flex items-center justify-center gap-6 w-full max-w-4xl">
        <Nav />
        <CartIcon />
      </div>
    </header>
  );
}
