
import React, { useState } from 'react'
import Child from './components/Child';
import UserContext from './contexts/user.context';

const App = () => {
  const [user, setUser] = useState("Mamta");
  return (
  <UserContext.Provider value={{user,setUser}}>
   <Child />
  </UserContext.Provider>
   
  )
}

export default App