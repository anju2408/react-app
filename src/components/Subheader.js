import React from 'react';
import './subheader.css';
import { Link } from 'react-router-dom';

export default function Subheader() {
  return (
    <>
      <div className="header header2">
        <ul>
          <li><i className="fa fa-bars" aria-hidden="true"></i>All</li>
          <Link to="/shirt">
            <li>Shirts</li>
          </Link>
          <Link to="/pant">
          <li>Pants</li>
          </Link>
          {/* <li>Best Sellers</li>
            <li>Mobiles</li> */}
          <li>Customer Service</li>
          <li>Today's Deals</li>
          <li>Fashion</li>
          <li>Electronics</li>
          <li>Prime<i className="fa fa-caret-down" aria-hidden="true"></i></li>
          <li>Home & Kitchen</li>
          <li>Amazon Pay</li>
          <li>New Releases</li>
          <li>Computers</li>
          <li><img src="/images/try.jpg" /></li>
        </ul>
      </div>
    </>
  )
}
