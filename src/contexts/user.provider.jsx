import { useState } from "react";
import UserContext from "./user.context";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'n',
        email: "n@gmail.com", age: 20
    });

    const handleInputChange = (e) => {
        setUser({ ...setUser, [e.target.name]: e.target.value })

    }
    return (
        <UserContext.Provider value={{ user, handleInputChange }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;