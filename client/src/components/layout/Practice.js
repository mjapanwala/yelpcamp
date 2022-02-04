import { PromiseProvider } from 'mongoose';
import React from 'react';

function Adult() {
  return (
    <Child>
      <p>fsdfdsf</p>
    </Child>
  )
}

function Child(props) {
  return (
    <p>Children: {props.children}</p>
   
  )
}

export{Adult}