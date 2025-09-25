import { createContext, useEffect, useState } from "react";
import { getcurrentuser } from "../../api/projectAPI.jsx";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const[user,setUser] = useState(null);
    useEffect(()=>{
        (async()=>{
            const data = await getcurrentuser();
            if(data.success) setUser(data.user);
        })();
    },[]);
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}