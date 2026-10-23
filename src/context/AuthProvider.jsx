import { createContext, useEffect, useState } from "react"
import { getLocalData } from "../utils/localStorage";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [localData, setLocalData] = useState();
  
 useEffect(() => {

   const data = getLocalData();
  
   setLocalData(data);
   
 },[])
 


  return (
    <div>
      <AuthContext.Provider value={localData}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
