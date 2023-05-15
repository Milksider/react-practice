import { Navigate } from "react-router-dom"
import { useAuth } from "./useAuth"

function CheckAuth({children}){
    const {isLoggedIn} = useAuth()

    if(!isLoggedIn){
        return <Navigate to="/login" />
    }
    return children
}

export default CheckAuth