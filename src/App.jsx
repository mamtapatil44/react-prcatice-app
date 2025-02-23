
import React, { useState } from 'react'
import Child from './components/Child';
import UserContext from './contexts/user.context';
import UserProvider from './contexts/user.provider';
import UserFormProvider from './contexts/userform.provider';
import Registration from './components/Registration';

const App = () => {
  return (
  // <UserProvider>
  //  <Child />
  // </UserProvider>
  <UserFormProvider>
    <Registration/>
  </UserFormProvider>
   
  )
}

export default App