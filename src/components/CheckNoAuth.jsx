import { Navigate } from "react-router-dom"
import { useAuth } from "./useAuth"

export function CheckNoAuth({children}){
    const {isLoggedIn} = useAuth()

    if(isLoggedIn){
        return <Navigate to="/main" />
    }
    return children
}

export default CheckNoAuth