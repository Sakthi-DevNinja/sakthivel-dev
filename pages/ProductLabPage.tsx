import React from "react";
import { ProductLab } from "../components/ProductLab";
import { PRODUCTS, PERSON_NAME } from "../constants";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const ProductLabPage: React.FC = () => {

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  const handleLabClick = () => {};

  return (
    <section id="product-lab">
      <div className="relative z-10 min-h-screen flex flex-col bg-black">

        <Navbar
          scrolled={true}
          name={PERSON_NAME}
          onHomeClick={handleHomeClick}
          onLabClick={handleLabClick}
        />

        <main className="max-w-6xl mx-auto py-40 px-6 grow">

          <div className="text-center mb-24">

            <h2 className="mono text-blue-500 text-sm uppercase tracking-[0.25em] mb-8">
              The Product Lab
            </h2>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient leading-tight mb-8">
              System Catalog
            </h1>

            <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
              A detailed technical breakdown of production systems,
              architecture choices, and developer workflows.
            </p>

          </div>

          <ProductLab
            products={PRODUCTS}
            onSelectProduct={(p) => window.location.href = `/product-lab/${p.id}/`}
          />

        </main>

      </div>

      <Footer />
    </section>
  );
};

export default ProductLabPage;