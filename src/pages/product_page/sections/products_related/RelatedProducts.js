import React from 'react';
import './RelatedProducts.css';
import ProductInfo from '../../../../data';

const RelatedProducts = () => {
  return (
    <div className="parent__related_product m-3 p-2">
      <h4>Related Products</h4>
      <div className="realted__products d-flex gap-5 p-2">
        {ProductInfo.relatedProducts.map((product, i) => {
          const discount = product.price.mrp - product.price.sellingprice;
          const perc = (discount / product.price.mrp) * 100;
          return (
            <div
              className="related_product__box align-items-center d-flex flex-column align-items-center justify-content-center"
              key={i}
            >
              <div className="related_product__image">
                <img src={product.image} alt="" className=" h-100" />
              </div>
              <p className="realted_product__name m-0 mt-3">{product.name}</p>
              <div className="related_price d-flex w-100">
                <h3 className="product__pricing mt-2">
                  ₹{product.price.sellingprice}{' '}
                  <span>₹{product.price.mrp}</span>{' '}
                  <span className='disc_per'>{Math.floor(perc)}% off</span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
