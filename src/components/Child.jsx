import React, { useContext } from 'react'
import UserContext from '../contexts/user.context'

const Child = () => {
    const {user,handleInputChange} = useContext(UserContext)
  return (
    <div className='flex flex-wrap'>
      <form>
        <div className='p-1 m-1 '>
        <input type="text" name='name' className='outline-1 rounded-lg' placeholder='Name' value={user.name} onChange={handleInputChange} />
        </div>
        <div className='p-1 m-1'>
        <input type="text" name='email' className='outline-1 rounded-lg' placeholder='Email' value={user.email} onChange={handleInputChange} />
        </div>
        <div className='p-1 m-1'>
        <input type="text" name='age' className='outline-1 rounded-lg' placeholder='Age' value={user.age} onChange={handleInputChange} />
        </div>
      </form>
    </div>
  )
}

export default Child