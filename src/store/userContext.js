import { useContext, createContext, useState } from "react";

export const usersContext = createContext(null)

export default function userContext ({ children }) {
    const [user, setUser] = useState('')
    return (

        <usersContext.Provider value={{ user, setUser }}>
            {children}
        </usersContext.Provider>
    )
}