import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

/**
 * Search bar for filtering products by title. Displays a dropdown
 * of matching products and navigates to the selected product.
 * @returns {JSX.Element}
 */
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { products } = useProducts();
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (id) => {
    navigate(`/products/${id}`);
    setQuery("");
    setShowResults(false);
  };
  return (
    <div className="w-full max-w-md flex mx-auto mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowResults(true);
        }}
        onBlur={() => setTimeout(() => setShowResults(false), 100)}
        placeholder="Search products..."
        className="w-full border border-[#E5E5E5] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
      />
      {showResults && query && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => handleInputChange(product.id)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {product.title}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No products found</li>
          )}
        </ul>
      )}
    </div>
  );
}
