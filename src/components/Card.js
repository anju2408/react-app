import React from 'react';
import data from '../Object';
import './card.css';

// Object Rendering

// let obj = {key:value};
// let arr = [];
// object rendering => dynamic way of inserting data
// array of object => collection of data

// array.map => callbacks
// let arr = [1,2,3,4,5];
// arr.map((ele,idx) => console.log(ele,idx));
// `${}` => string value
// map => it return an array which is qual to original array in length but changes occurs in value

export default function Card({inputState}) {
    let filteredData = data.filter(ele=>ele.type.includes(inputState.inputState.toLowerCase()));
    return (
        <>
            <div className='parent'>
                {
                    filteredData.length==0?
                    data.map((ele) => {
                        return (
                            <div className='card' key={ele.id}>
                                <div className='divImage'>
                                    <img src={ele.image} className='img-card' />
                                </div>
                                <div className='divHead'>
                                    <p className='para-small-1'>{ele.paraSmall1}</p>
                                    <p className='para-small-2'>Sponsored <i className="fa fa-info-circle" aria-hidden="true"></i></p>
                                    <h4>{ele.title}</h4>
                                    <div className='para-1'>{ele.para1}</div>
                                    <div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-half-o" aria-hidden="true"></i></div>
                                    <div className='price'><sup className='span-ruppes'>₹</sup><div className='span-price'>{ele.price}</div><del>₹{ele.priceDel}</del>
                                        ({ele.priceDiscount}% off)</div>
                                    <div><img src='images/prime.png' className='img-prime' /></div>
                                    <div className='para-2'>FREE Delivery by Amazon</div>
                                    <div className='quantity'>{ele.quantity}</div>
                                     {/* we have to put a arrow funciton in order to call a function directly in inline onclick*/}
                                    <button className='btn-add' onClick={()=>inputState.addToCart(ele)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    }) :filteredData.map((ele)=>{
                        return (
                            <div className='card' key={ele.id}>
                                <div className='divImage'>
                                    <img src={ele.image} className='img-card' />
                                </div>
                                <div className='divHead'>
                                    <p className='para-small-1'>{ele.paraSmall1}</p>
                                    <p className='para-small-2'>Sponsored <i className="fa fa-info-circle" aria-hidden="true"></i></p>
                                    <h4>{ele.title}</h4>
                                    <div className='para-1'>{ele.para1}</div>
                                    <div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-half-o" aria-hidden="true"></i></div>
                                    <div className='price'><sup className='span-ruppes'>₹</sup><div className='span-price'>{ele.price}</div><del>₹{ele.priceDel}</del>
                                        ({ele.priceDiscount}% off)</div>
                                    <div><img src='images/prime.png' className='img-prime' /></div>
                                    <div className='para-2'>FREE Delivery by Amazon</div>
                                    <div className='quantity'>{ele.quantity}</div>
                                    <button className='btn-add' onClick={()=>inputState.addToCart(ele)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
