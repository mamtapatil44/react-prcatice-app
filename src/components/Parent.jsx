import React from 'react'

import ChildOne from './ChildOne';

//1. In React, you can pass data from a parent component to its child components using props. 
// Props allow you to pass data and event handlers down the component tree.
//2. If the child needs to send data back to the parent, you can pass a function as a prop.

const Parent = () => {
  const message = "Hello from Parent!";
  const handleData = (data) => {
    console.log("Data received from child:", data);
}; 
  return (
    <div><ChildOne text={message} sendData={handleData}/></div>
  )
}

export default Parent