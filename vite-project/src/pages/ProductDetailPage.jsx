import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/productsApi.jsx";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/products" className="text-blue-600 underline mb-4 block">
        &larr; Back to Products
      </Link>
      <img
        src={product.image?.url}
        alt={product.title}
        className="w-full h-80 object-cover rounded shadow"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-lg mt-2">{product.price} NOK</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
}
