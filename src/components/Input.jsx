import React, { useContext } from 'react'
import UserFormContext from '../contexts/userform.context';

const Input = ({label,field,type ="text"}) => {
    const { formData, updateField } = useContext(UserFormContext);
  return (
    <div className="flex flex-col w-full max-w-md">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input className='mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full' type={type}  value={formData[field] || ''} onChange={(e)=>updateField(field,e.target.value)}/>
    </div>
  )
}

export default Input