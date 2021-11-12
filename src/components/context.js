import { createContext } from "react";
import { useState } from "react";


export const AccountContext = createContext();
export const AccountProvider = ({children}) =>{
    const [layout, setLayout] = useState([])
    const [data, setData] = useState()

    return(
        <AccountContext.Provider value ={{layout, setLayout, data, setData}}>
            {children}
        </AccountContext.Provider>
    )
}