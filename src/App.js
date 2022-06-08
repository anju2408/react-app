import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Card from './components/Card';
import Shirts from './components/SubheaderOption/Shirts';
import Pants from './components/SubheaderOption/Pants';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// functional component
// class component => because it will be deprecated

// index.js => app.js => any component made by you.
// app.js is treated as a parent for all the custom made component
function App() {
    let [inputState, setInputState] = useState('sample');
    return (

        <BrowserRouter>
            <Header setInputState={setInputState} />
            <Subheader />
            {/* so that header and subheader are constant for each page */}
            <Routes>
                <Route path="/" element={<Card inputState={inputState} />} />
                <Route path="/card" element={<Card />} />
                {/* Make a shirt component */}
                <Route path="/shirt" element={<Shirts />} />
                {/* Make a pant component */}
                <Route path="/pant" element={<Pants />} />
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