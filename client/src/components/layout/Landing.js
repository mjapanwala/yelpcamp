import React from "react";

function Mini({name}) {
  
  return (
    <>
    <h1> Hello, {name}</h1> 
    <h2>{name}</h2>
    </>
  );
}

function Landing() {
  
  let cups = [];
  for (let i = 0; i <= 5; i++) {
    cups.push(<Mini key={i} guest={i} />);
  }
  return cups
}

export { Landing, Mini };



