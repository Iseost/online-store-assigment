import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
