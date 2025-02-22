import React, { useContext } from 'react'
import UserContext from '../contexts/user.context'

const Child = () => {
    const {user,setUser} = useContext(UserContext)
  return (
    <div>
      <h1>Hello, {user}!</h1>
      <button className='bg-amber-400 text-white rounded-lg p-1' onClick={() => setUser("Devika")}>Change User</button>
    </div>
  )
}

export default Child