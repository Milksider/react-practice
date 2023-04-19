import { createContext, useState } from "react"

export const AuthContext = createContext(null)

export function AuthProvider({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {isLoggedIn, setIsLoggedIn}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
