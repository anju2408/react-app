import React from 'react'
import '../card.css';

// destructing

export default function ShirtComp({ data }) {
    console.log(data);
    return (
        <>
            <div className='parent'>
                {
                    data.map((ele) => {
                        return (
                            <div className='card'>
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
                                    <button className='btn-add'>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
