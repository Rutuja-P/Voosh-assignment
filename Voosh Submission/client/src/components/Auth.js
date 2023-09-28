import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext(null)

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);

    const login= (user)=>{
        setUser(user)
    }

    return(
        <AuthContext.Provider value={{user,login}}>
            {children}
        </AuthContext.Provider>
    )
}

export const RequireAuth=({children})=>{
    const user = JSON.parse(window.localStorage.getItem("user"));

    if(!user){
        return <Navigate to ='/login'/>
    }

    return children
}

export const useAuth=()=>{
    return useContext(AuthContext)
}