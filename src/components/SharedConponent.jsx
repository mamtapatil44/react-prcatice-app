import { Children, createContext, useContext, useState } from "react";

const SharedContext = createContext();

const SharedProvider = ({children}) =>{
    const [user,setUser] = useState({
        name:"MMMMM",
        email:"m@gmail.com"
    })


    return(
        <SharedContext.Provider value={{user,setUser}}>
            {children}
        </SharedContext.Provider>
    )
}






export default SharedProvider;


export const ComponentOne = () =>{
    const { user} = useContext(SharedContext)

    return <div>
        <h4>Conponent One name :: {user?.name}</h4>
    </div>
}


export const ComponentTwo = () =>{
    const { user} = useContext(SharedContext)
    return <div>
        <h4>Conponent Two email :: {user?.email}</h4>
    </div>
}



