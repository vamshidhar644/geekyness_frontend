import React from 'react';
import ProductInfo from '../../../../data';
import './ProductInfo.css';
import { AiTwotoneStar, AiTwotoneTags } from 'react-icons/ai';

const ProductInformation = () => {
  const mrp = ProductInfo.price.mrprice;
  const sellingprice = ProductInfo.price.sellingprice;
  const discount = mrp - sellingprice;
  const perc = (discount / mrp) * 100;
  return (
    <div className="mx-5 mt-5">
      <h3 className="product__name">{ProductInfo.name}</h3>

      <div className="d-flex gap-2">
        <p className="product__rating d-flex justify-content-center align-items-center m-0 gap-1">
          {ProductInfo.rating.rating}{' '}
          <span className="d-flex">
            <AiTwotoneStar />
          </span>
        </p>
        <p className="ratings_reviews m-0 mt-2">
          {ProductInfo.rating.ratings} Ratings &{' '}
          {ProductInfo.rating.reviews.total} Reviews
        </p>
      </div>

      <h3 className="product__pricing mt-2">
        ₹{sellingprice} <span>₹{mrp}</span> <span>{Math.floor(perc)}% off</span>
      </h3>

      <p className="package_fee">
        +₹{ProductInfo.price.packageprice} Secured Packaging fee
      </p>

      <div className="d-flex w-100 justify-content-center gap-4">
        <div className="product__button">
          <p className="m-0">Add to Cart</p>
        </div>
        <div className="product__button">
          <p className="m-0">Buy now</p>
        </div>
      </div>

      <div className="avail_offer__section mt-3">
        <h6>Available offers</h6>
        <ul className="avail__offers">
          {ProductInfo.offers.map((offer, i) => {
            return (
              <li key={i} className="d-flex align-items-center gap-2">
                <AiTwotoneTags />
                {offer}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <table>
          <tr>
            <td>
              <h6>Color</h6>
            </td>
            <td className="d-flex gap-3 my-2">
              {ProductInfo.colors.map((color, i) => {
                return (
                  <div className="product_colors" key={i}>
                    <img className="w-100" src={color} alt="" />
                  </div>
                );
              })}
            </td>
          </tr>
          <tr>
            <td>
              <h6 className="m-0">RAM</h6>
            </td>
            <td className="d-flex gap-3 my-2">
              {ProductInfo.ram.map((ram, i) => {
                return (
                  <div key={i} className="ram__box d-flex">
                    <p className="m-0">{ram} GB</p>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr>
            <td>
              <h6 className="m-0">Storage</h6>
            </td>
            <td className="d-flex gap-3 my-2">
              {ProductInfo.storage.map((storage, i) => {
                return (
                  <div key={i} className="storage__box d-flex">
                    <p className="m-0">{storage} GB</p>
                  </div>
                );
              })}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductInformation;
