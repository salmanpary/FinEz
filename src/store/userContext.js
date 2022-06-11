import { useContext, createContext, useState } from "react";

export const usersContext = createContext(null)

export default function UserContext({ children }) {
    const [useremail, setUseremail] = useState('')
    return (

        <usersContext.Provider value={{ useremail, setUseremail }}>
            {children}
        </usersContext.Provider>
    )
}