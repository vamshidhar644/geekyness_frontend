import React from 'react';
import './ProductPage.css';
import ProductImage from './sections/product_image/ProductImage';
import ProductInformation from './sections/product_info/ProductInformation';
import ProductFeatures from './sections/product_info/ProductFeatures';

const ProductPage = () => {
  return (
    <div className="parent__product_page d-flex">
      <div className="product__images w-50">
        <ProductImage />
      </div>
      <div className="product__info w-50">
        <ProductInformation />
        <ProductFeatures />
      </div>
    </div>
  );
};

export default ProductPage;
