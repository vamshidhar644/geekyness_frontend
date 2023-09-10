import React from 'react';
import './Navigation.css';

import {
  AiFillCaretDown,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

import { BiSearchAlt2 } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className="parent__nav d-flex justify-content-between">
      <div className="section__1 d-flex">
        <div className="company___logo">
          <img
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
            alt=""
            className="w-100"
          />
        </div>
        <div className="all__brands d-flex justify-content-center align-items-center">
          <h6 className='m-0 p-0'>All Brands</h6>
          <AiFillCaretDown />
        </div>
      </div>
      <div className="section__2 d-flex align-items-center text-nowrap gap-4">
        <div className="search__section bg-white d-flex w-100 p-2">
          <BiSearchAlt2 />
          <input
            type="text"
            placeholder="Search for mobiles"
            className="w-100"
          />
        </div>
        <div className="sign_in">
          <h6>Sign in</h6>
        </div>
        <div className="section__3 d-flex gap-3 h-100 align-items-center p-4">
          <FaRegUser />
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
