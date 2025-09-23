import { Link } from "react-router-dom";

export default function ProductCard({ product = {} }) {
  const imageUrl = product.image?.url || "https://via.placeholder.com/150";
  const title = product.title || "No Title";
  const price = product.price !== undefined ? product.price : "N/A";
  const id = product.id || "";

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4 flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="font-bold mt-2">${price}</p>
      <Link
        to={id ? `/products/${id}` : "#"}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center"
      >
        View Details
      </Link>
    </div>
  );
}
