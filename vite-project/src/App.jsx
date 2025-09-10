import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import ProductPage from "./pages/ProductPage.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-4">
        <ProductPage />
      </main>

      <Footer />
    </div>
  );
}
