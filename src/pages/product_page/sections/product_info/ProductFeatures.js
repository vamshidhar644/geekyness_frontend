import React from 'react';
import ProductInfo from '../../../../data';

const ProductFeatures = () => {
  return (
    <div className="product__features m-3">
      <table className="mx-4">
        <tr>
          <td>
            <h6>Warranty</h6>
          </td>
          <td className="d-flex gap-3 my-3">{ProductInfo.warranty}</td>
        </tr>
        <tr>
          <td>
            <h6 className="m-0">Highlights</h6>
          </td>
          <td className="d-flex gap-3 my-3">
            <ul className="d-flex flex-column gap-2">
              {ProductInfo.highlights.map((highlight, i) => {
                return <li key={i}>{highlight}</li>;
              })}
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <h6 className="m-0">Description</h6>
          </td>
          <td className="d-flex gap-3 my-3">{ProductInfo.descriptions}</td>
        </tr>
      </table>
    </div>
  );
};

export default ProductFeatures;
