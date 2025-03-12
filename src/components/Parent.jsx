import React, { useState } from 'react'

import ChildOne from './ChildOne';

//1. In React, you can pass data from a parent component to its child components using props. 
// Props allow you to pass data and event handlers down the component tree.
//2. If the child needs to send data back to the parent, you can pass a function as a prop.
// 3To manage communication between sibling components in React, 
// you can lift the shared state up to their common parent component.

const Parent = () => {
  const message = "Hello from Parent!";
  const [textMsg ,setMessage] = useState("")
  const handleData = (data) => {
    console.log("Data received from child:", data);
}; 
  return (
    <div><ChildOne text={message} sendData={handleData}/>
    <SiblingOne setMessage={setMessage}/>
    <SiblingTwo textMsg={textMsg}/>
    
    </div>
  )
}

const SiblingOne = ({setMessage})=>{

  return <div>
   <button className='bg-blue-500 rounded-lg p-2' onClick={()=>setMessage("message from sibling one")}>S One Button</button>
  </div>
}


const SiblingTwo = ({textMsg})=>{

  return <div><h4>Sibling two :::: {textMsg} </h4></div>
}



export default Parent