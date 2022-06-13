import React from 'react';
// React from react => to use for jsx
// In react every html must be closed
// Input elements (void elements) must be closed
// In react we do not use class instead we use className => because in react we write jsx that is a part of javascript and class is a reserved
// Jsx is parsed by using Babel in react
// export default means that in one file or module there is only one functional component

import './header.css';
import { Link } from 'react-router-dom';
// import amazonImg from '../images/amazon.jpg';
{/* import amazonImg is a key of js from src folder */ }

export default function Header({ setInputState }) {
    function manageInput(e) {
        let { value } = e.target;
        console.log(value);
        setInputState(value);
    }
    return (
        <>
            <div className="header">
                <div className="img-container">
                    {/* from src folder => only 1 or 2 images add*/}
                    {/* <img src={amazonImg} /> */}
                    {/* we are writing any js value */}

                    {/* from public folder => multiple images add */}
                    {/* <img src="/images/amazon.jpg" /> */}
                    <Link to="/card">
                        <img src="/images/amazon.jpg" />
                    </Link>

                </div>
                <div className="content-container">
                    <div className="hello">Hello</div>
                    <div className="address"><i className="fa fa-map-marker" aria-hidden="true"></i>Select your address</div>
                </div>
                <div className="search-parent">
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">All Categories</option>
                        <option value="">Alexa Skills</option>
                        <option value="">Amazon Devices</option>
                        <option value="">Amazon Fashions</option>
                        <option value="">Amazon Pharmacy</option>
                        <option value="">Appliances</option>
                        <option value="">Apps & Games</option>
                        <option value="">Baby</option>
                        <option value="">Beauty</option>
                        <option value="">Books</option>
                        <option value="">Car & Motorbike</option>
                        <option value="">Clothing & Accessories</option>
                        <option value="">Collectibles</option>
                        <option value="">Computes & Accessories</option>
                        <option value="">Deals</option>
                        <option value="">Electronics</option>
                        <option value="">Furnitures</option>
                        <option value="">Garden & Outdoors</option>
                        <option value="">Gift Cards</option>
                        <option value="">Gracery & Gourment Foods</option>
                        <option value="">Health & Personal Care</option>
                        <option value="">Home & Kitchen</option>
                        <option value="">Industrial & Scientific</option>
                        <option value="">Jewellery</option>
                        <option value="">Kindle Store</option>
                        <option value="">Luggage & Bags</option>
                        <option value="">Luxury Beauty</option>
                        <option value="">Movies & TV Shows</option>
                        <option value="">Music</option>
                        <option value="">Musical Instruments</option>
                        <option value="">Office Products</option>
                        <option value="">Pet Supplies</option>
                        <option value="">Prime Video</option>
                        <option value="">Shoes & Handbags</option>
                        <option value="">Software</option>
                        <option value="">Sports, Fitness & Outdoors</option>
                        <option value="">Subscribe & Save</option>
                        <option value="">Tools & Home Improvement</option>
                        <option value="">Toys & Games</option>
                        <option value="">Under ₹500</option>
                        <option value="">Video Games</option>
                        <option value="">Watches</option>
                    </select>
                    <input type="text" onChange={manageInput} />
                    <span className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></span>
                </div>
                {/* <div className="img1-container">
                    <img src="/images/flag.jpg" />
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                </div>
                <div className="content1-container">
                    <div className="hello-sign-in">Hello, Sign in</div>
                    <div className="account">Account & Lists<i className="fa fa-caret-down" aria-hidden="true"></i></div>
                </div>
                <div className="content1-container">
                    <div className="hello-sign-in">Returns</div>
                    <div className="account">& Orders</div>
                </div> */}
                {/* <div className="img-container img2-container">
                    <img src="/images/cart.png" />
                    <div>Cart</div>
                </div> */}
                <div className='cart'>
                    <Link to="/cartpage" > <div>Cart</div></Link>
                    <div className='box'>{setInputState.cart.length}</div>
                </div>
            </div>
        </>
    )
}
