import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductLabPage from "./pages/ProductLabPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App: React.FC = () => {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Product Lab */}
      <Route path="/product-lab" element={<ProductLabPage />} />

      {/* Product Detail */}
      <Route path="/product/:id" element={<ProductDetailPage />} />

    </Routes>
  );
};

export default App;