import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4 flex flex-col">
      <img
        src={product.image?.url}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text.lg font-semibold mb-2">{product.title}</h2>
      <p className="font-bold mt-2">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center"
      >
        View Details
      </Link>
    </div>
  );
}
