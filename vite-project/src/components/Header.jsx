import { Nav } from "./Nav";
import { CartIcon } from "./CartIcon";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-white shadow-md flex flex-col items-center gap-4 p-4 text-[#3B322F]">
      <h1 className="text-2xl font-bold">BrightCart</h1>

      <div className="flex items-center justify-center gap-6 w-full max-w-4xl text-[#3B322F]">
        <Nav />
        <CartIcon />
      </div>
      <SearchBar />
    </header>
  );
}
