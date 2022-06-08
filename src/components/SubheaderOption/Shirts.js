import React from 'react'
import data from '../../Object.js';
import ShirtComp from './ShirtComp.js';

// to render object we use array.map() function
// to filter out something from an array we use array.filter() function
// to pass information from one parent component to a child component we use pros

export default function Shirts() {
    console.log(Object);
    let shirtData = data.filter(ele => ele.type == "shirt");
    return (
            <ShirtComp data={shirtData} />

    )
}
