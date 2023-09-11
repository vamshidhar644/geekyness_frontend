import React from 'react';
import './ProductPage.css';
import ProductImage from './sections/product_image/ProductImage';
import ProductInformation from './sections/product_info/ProductInformation';
import ProductFeatures from './sections/product_info/ProductFeatures';
import ProductReview from './sections/product_reviews/ProductReview';
import RelatedProducts from './sections/products_related/RelatedProducts';

const ProductPage = () => {
  return (
    <div className="parent__product_page">
      <div className="d-flex">
        <div className="product__images w-50">
          <ProductImage />
        </div>
        <div className="product__info w-50">
          <ProductInformation />
          <ProductFeatures />
        </div>
      </div>
      <ProductReview />

      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
