import React,{useState} from 'react'
import "../card.css"
import "./cart.css"

export default function Cart({ cart }) {
    return (
        <>
            <div className='parent'>
                {
                    cart.cart.length == 0 ?
                        <div>there is no product added in cart</div>
                        :
                        cart.cart.map((ele) => {
                            return (
                                <div className='cart-container' key={ele.id}>
                                    <div className='container'>
                                        <img src={ele.image} />
                                    </div>
                                    <div className='product-detail'>
                                        <div>Price</div>
                                        <div> Rs.{ele.price}</div>
                                    </div>
                                    <div className='quantity-container'>
                                        <div>Quantity</div>
                                        <button onClick={() => cart.addToCart(ele)}>+</button>
                                        <div>Pcs {ele.quantity}</div>
                                        <button onClick={() => cart.deleteToCart(ele)}>-</button>
                                    </div>
                                    <div className='delete'>
                                        <button onClick={() => cart.removeCart(ele)}>Delete from Cart</button>
                                    </div>
                                    <div className='total'>
                                        <div>Total Price</div>
                                        <div>{ele.price * ele.quantity} </div>
                                    </div>
                                </div>
                                // <div className='card' key={ele.id}>
                                //     <div className='divImage'>
                                //         <img src={ele.image} className='img-card' />
                                //     </div>
                                //     <div className='divHead'>
                                //         <p className='para-small-1'>{ele.paraSmall1}</p>
                                //         <p className='para-small-2'>Sponsored <i className="fa fa-info-circle" aria-hidden="true"></i></p>
                                //         <h4>{ele.title}</h4>
                                //         <div className='para-1'>{ele.para1}</div>
                                //         <div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-half-o" aria-hidden="true"></i></div>
                                //         <div className='price'><sup className='span-ruppes'>₹</sup><div className='span-price'>{ele.price}</div><del>₹{ele.priceDel}</del>
                                //             ({ele.priceDiscount}% off)</div>
                                //         <div><img src='images/prime.png' className='img-prime' /></div>
                                //         <div className='para-2'>FREE Delivery by Amazon</div>
                                //         <div className='quantity'>{ele.quantity}</div>
                                //         {/* we have to put a arrow funciton in order to call a function directly in inline onclick*/}
                                //         <button className='btn-add' onClick={() => cart.addToCart(ele)}>Add to Cart</button>
                                //     </div>
                                // </div>
                            )
                        })
                }
            </div>
        </>
    )
}