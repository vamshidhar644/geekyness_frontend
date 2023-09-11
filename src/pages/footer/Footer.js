import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="parent__footer d-flex justify-content-between">
      <div className="company___logo">
        <img
          src={process.env.PUBLIC_URL + '/assets/logo.png'}
          alt=""
          className="w-100"
        />
      </div>
      <div className="footer_section__2 d-flex justify-content-center align-items-center">
        <ul className="d-flex gap-5 p-5">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Return Poilcy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
