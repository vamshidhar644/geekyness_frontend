import React from 'react';
import './ProductImage.css';
import ProductInfo from '../../../../data';
import ReactImageMagnify from 'react-image-magnify';

const ProductImage = () => {
  const watchImg = ProductInfo.images[0];

  return (
    <div className="parent__image d-flex flex-column align-items-center m-5 gap-4">
      <div className="main__image d-flex justify-content-center p-3">
        <ReactImageMagnify
          className="magnify__image w-50"
          {...{
            smallImage: {
              alt: '',
              isFluidWidth: true,
              src: watchImg,
            },
            largeImage: {
              src: watchImg,
              width: 350,
              height: 600,
            },
          }}
        />
      </div>
      <div className="other__images d-flex gap-3 justify-content-start">
        {ProductInfo.images &&
          ProductInfo.images.map((image, path) => {
            return (
              <div className="other_image" key={path}>
                <img
                  className="image w-100 h-100"
                  src={image}
                  alt=""
                  // onClick={() => changeImage(path)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductImage;
