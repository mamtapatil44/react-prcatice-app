//
// React JS: You have multiple instances of a component (e.g., cards, to-do items), and changing state in
// one instance should affect another. How do you manage this?

import { useState } from "react";

const LiftState = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", completed: false },
    { id: 2, text: "Item 2", completed: false },
  ]);

  const handleToggle =(id)=>{
    setItems((prev)=>
        prev.map(item=> item.id === id ? {...item,completed : !item.completed } :item) ,
    )
  }

  return <div>
    {items.map((item=><LiftChild key={item.id} item={item} handleToggle={handleToggle} />))}
   
  </div>
};
export default LiftState;

const LiftChild =({item,handleToggle})=>{

    return <div>
        <p>{item.text} - {item.completed ? "Completed" : "Pending"}</p>
        <button className="bg-red-400 p-2" onClick={()=>handleToggle(item.id)}>Toggle</button>
    </div>
}