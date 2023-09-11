import React from 'react';
import ProductInfo from '../../../../data';
import './ProductReview.css';

import { AiFillStar } from 'react-icons/ai';

const ProductReview = () => {
  return (
    <div className="parent__ratings_reviews m-3">
      <div className="product__rate d-flex p-3">
        <div className="product_rate_box1 w-50">
          <h4>Ratings & Reviews</h4>
          <h2>
            {ProductInfo.rating.rating}
            <span>
              <AiFillStar />
            </span>
          </h2>
          <p className="ratings_reviews m-0">
            {ProductInfo.rating.ratings} Ratings &{' '}
            {ProductInfo.rating.reviews.total} Reviews
          </p>
        </div>
        <div className="product_rate_box2 w-50"></div>
      </div>
      <hr />
      <div className="product__reviews">
        <div className="reviews__section d-flex p-3 gap-4">
          {ProductInfo.rating.reviews.map((review, i) => {
            return (
              <div key={i} className="review__box p-2">
                <div className="d-flex gap-2">
                  <p className="product__rating d-flex justify-content-center align-items-center m-0 gap-1">
                    {review.rate}
                    <span className="d-flex">
                      <AiFillStar />
                    </span>
                  </p>
                  <p className="m-0">{review.rate_text}</p>
                </div>
                <div className="mt-2">
                  <p>{review.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
