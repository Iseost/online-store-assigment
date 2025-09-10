// pages/ProductPage.jsx

import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi.jsx";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image?.url}
              alt={product.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="mt-1">{product.price} NOK</p>
          </div>
        ))}
      </div>
    </div>
  );
}
