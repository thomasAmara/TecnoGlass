import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductContainer from '../components/Product/ProductContainer';
import Projects from '../components/homeComponent/Projects';
import LuminatedGlass from '../components/Product/Luminated';

function Products() {
  return (
    <div>
      <Navbar />
      <ProductContainer />
      <LuminatedGlass />
      <Projects />
      <Footer />
    </div>
  );
}

export default Products;
