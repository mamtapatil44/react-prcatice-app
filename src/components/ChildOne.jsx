import React from 'react'

function ChildOne({text,sendData}) {
  return (
    <div><h4>In child : {text}</h4>
    <button className='bg-amber-800 rounded-lg p-2' onClick={() => sendData("Hello from Child!")}>
            Send Data to Parent
        </button>
    </div>
  )
}

export default ChildOne