
import React, { useState } from 'react'
import Child from './components/Child';
import UserContext from './contexts/user.context';
import UserProvider from './contexts/user.provider';
import UserFormProvider from './contexts/userform.provider';
import Registration from './components/Registration';
import Parent from './components/Parent';
import SharedProvider, { ComponentOne, ComponentTwo } from './components/SharedConponent';
import NestProvider, { NextParent } from './components/Netsed';

const App = () => {
  const[count,setCount] = useState(0)
  const handleOnclick =()=>{
    setCount(count+1)
   
  }
  console.log("count " ,count)
  return (
  // <UserProvider>
  //  <Child />
  // </UserProvider>
  // <UserFormProvider>
  //   <Registration/>
  // </UserFormProvider>
  <div className='conatiner mx-auto bg-amber-700'>
   <p>Count:{count}</p>
   <button className='bg-blue-600 m-2 p-2' onClick={handleOnclick}>Click me</button>

   <Parent/>
<SharedProvider>
  <ComponentOne/>
  <ComponentTwo/>
</SharedProvider>


<NestProvider>
<NextParent/>
</NestProvider>


  </div>
 
  )
}

export default App