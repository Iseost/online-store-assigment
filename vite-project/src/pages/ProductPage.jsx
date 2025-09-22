import React from "react";
import { useProducts } from "../pages/useProducts.js";

export default function ProductPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image?.url}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="mt-1">{product.price} NOK</p>
    </div>
  );
}
