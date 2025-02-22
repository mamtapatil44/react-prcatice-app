
import React, { useState } from 'react'
import Child from './components/Child';
import UserContext from './contexts/user.context';
import UserProvider from './contexts/user.provider';

const App = () => {
  return (
  <UserProvider>
   <Child />
  </UserProvider>
   
  )
}

export default App