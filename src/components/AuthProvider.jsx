import { createContext, useState } from "react"

export const AuthContext = createContext(null)

export function AuthProvider({children}) {

        const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === null ? false : true)

        const signin = (cb) => {
            setIsLoggedIn(true)
            localStorage.setItem('isLoggedIn', true)
            cb()
        }
        const signout = (cb) => {
            setIsLoggedIn(false)
            localStorage.clear()
            cb()
        }

        const value = {isLoggedIn, signin, signout}

        return <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

}
