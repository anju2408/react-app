import React from 'react'
import data from '../../Object.js';
import PantComp from './PantComp.js';


export default function Pants() {
  console.log(Object);
  let pantData = data.filter(ele => ele.type == "pant");
  return (
      <PantComp data={pantData} />
  )
}
