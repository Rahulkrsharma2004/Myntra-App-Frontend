import React,{useState,createContext} from 'react'
export const Context = createContext()

const AuthContext = ({children}) => {
    const [isAuth,setIsAuth] = useState(false)
  return (
  <Context.Provider value={{isAuth,setIsAuth}}>
    {children}
  </Context.Provider>
  )
}

export default AuthContext