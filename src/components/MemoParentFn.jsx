import React, { useState } from "react";

const MemoParentFn = () => {
    console.log("MemoParentFn")
  const [parentState, setParentState] = useState(false);
  const [childState, setChildState] = useState("Initail Child state");
  return (
    <div className="mt-8 bg-amber-100">
      <button className="bg-amber-950 p-2 rounded-lg" onClick={()=>{setParentState(!parentState)}}>Toggele</button>
      <ChildFn childState={childState} />
    </div>
  );
};

export default MemoParentFn;

export const ChildFn = React.memo(({ childState }) => {
    console.log("childfn")
  return (
    <div>
        <h2>In child fn compo</h2>
      <h4>{childState}</h4>
    </div>
  );
});
