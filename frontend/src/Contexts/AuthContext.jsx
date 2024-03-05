import React,{useState,createContext,useEffect} from 'react'
export const Context = createContext()

const AuthContext = ({children}) => {
    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState("")
    useEffect(()=>{
      setIsAuth(localStorage.getItem("setIsAuth"))
      setUser(localStorage.getItem("setUser"))
      },[])
  return (
  <Context.Provider value={{isAuth,setIsAuth,user,setUser}}>
    {children}
  </Context.Provider>
  )
}

export default AuthContext