import { useState } from "react"
import UserFormContext from "./userform.context"

const UserFormProvider = ({children})=>{
    const[formData,setFormData] = useState({
        name: "n",
        email: "n@gmail.com",
        password: "12345",
        phone: 7868564345,
    });
    const updateField =(field,value)=>{
        setFormData((prv)=>({
            ...prv, [field]:value
        }))

    }

    return(
    <UserFormContext.Provider value={{formData,updateField}}>
        {children}
    </UserFormContext.Provider>)

}

export default UserFormProvider