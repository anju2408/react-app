import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Card from './components/Card';
import Shirts from './components/SubheaderOption/Shirts';
import Pants from './components/SubheaderOption/Pants';
import Cart from './components/cartPage/Cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// functional component
// class component => because it will be deprecated

// index.js => app.js => any component made by you.
// app.js is treated as a parent for all the custom made component
function App() {
  let [inputState, setInputState] = useState('sample');
  // step :1 => for add to cart
  const [cart, setCart] = useState([]);
  // we are making this state here so that we can use it on any of the other child component

  // function add to cart
  // step :2 => making logic for add to cart 
  function addToCart(product) {
    console.log("clicked on cart", product);

    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele) => ele.id === product.id);
    // for empty cart array this find method will not work.

    if (productinCart) {
      // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
      setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))
    }
    else {
      // spread operator

      // [...cart]
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  function deleteToCart(product) {
    const productinCarttoDelete = cart.find((ele) => ele.id === product.id);
    console.log(productinCarttoDelete);
    if (productinCarttoDelete.quantity === 1) {
      setCart(cart => cart.filter(ele => { return ele.id !== productinCarttoDelete.id }))
    } else {
      setCart(cart.map((ele) => ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity - 1 } : ele))
    }
  }

  function removeCart(product) {
    setCart(cart.filter(ele => ele.id != product.id))
  }
  return (

    <BrowserRouter>
      <Header setInputState={{ setInputState, cart }} />
      <Subheader />
      {/* so that header and subheader are constant for each page */}
      <Routes>
        <Route path="/" element={<Card inputState={{ inputState, addToCart }} />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cartpage" element={<Cart cart={{ cart, addToCart, deleteToCart, removeCart }} />} />
        {/* Make a shirt component */}
        <Route path="/shirt" element={<Shirts addToCart={addToCart} />} />
        {/* Make a pant component */}
        <Route path="/pant" element={<Pants addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>

    //     <>
    //     {/* <Header /> */}
    //     {/* <Subheader /> */}
    //     {/* <Card /> */}

    // </>


    // <div>
    //     <h1>Hello World!</h1>
    // </div>

    // react fragment
    // <>
    // Hello
    // </>
  );
}

export default App;