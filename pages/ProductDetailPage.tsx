import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS, PERSON_NAME } from "../constants";
import { ProductDetailView } from "../components/ProductDetailView";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const ProductDetailPage: React.FC = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="text-white p-20">Product not found</div>;
  }

  return (
    <div className="relative z-10 min-h-screen flex flex-col bg-black">

      <Navbar
        scrolled={true}
        name={PERSON_NAME}
        onHomeClick={() => navigate("/")}
        onLabClick={() => navigate("/product-lab")}
      />

      <div className="grow">
        <ProductDetailView product={product} />
      </div>

      <Footer />

    </div>
  );
};

export default ProductDetailPage;