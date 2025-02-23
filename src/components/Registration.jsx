import React, { useContext } from 'react'
import Input from './Input'
import UserFormContext from '../contexts/userform.context';

const Registration = () => {
    const { formData, updateField } = useContext(UserFormContext);
    const handleSubmit =()=>{
        alert("User register successfully.....")
        console.log("formData ",formData)
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
                <h2 className='text-2xl font-semibold text-center'>Registration Form</h2>
                <div className='flex flex-col gap-4'>
                    <Input label="Name" field="name" />
                    <Input label="Email" field="email" />
                    <Input label="Password" field="password" />
                    <Input label="Phone" field="phone" type='tel' />
                    <button  className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all' type="submit" onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Registration