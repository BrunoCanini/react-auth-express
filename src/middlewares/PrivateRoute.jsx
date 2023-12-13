import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){

    const {isLoggedIn} = useAuth();
    console.log(isLoggedIn);

    if(!isLoggedIn) return <Navigate to="/login"/>

    return children
}