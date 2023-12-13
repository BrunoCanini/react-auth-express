import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import fetchApi from "../utils/fetchApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(payload){
        const data = await fetchApi("/login", "POST", payload)
        setIsLoggedIn(true);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/dashboard")
    }

    return (
        <AuthContext.Provider value={{user, isLoggedIn, handleLogin}} >

            { children }

        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}