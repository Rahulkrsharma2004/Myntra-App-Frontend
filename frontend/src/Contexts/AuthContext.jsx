import {useState,createContext,useEffect} from 'react'
export const Context = createContext()

const AuthContext = ({children}) => {
    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState("")
    const [totalItems, setTotalItems] = useState();
    useEffect(()=>{
      setIsAuth(localStorage.getItem("setIsAuth"))
      setUser(localStorage.getItem("setUser"))
      },[])
      console.log("first")
  return (
  <Context.Provider value={{isAuth,setIsAuth,user,setUser,totalItems,setTotalItems}}>
    {children}
  </Context.Provider>
  )
}

export default AuthContext