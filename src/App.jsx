import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalData, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null);

  const Localdata = useContext(AuthContext);
  console.log(Localdata)
 
//   useEffect(() => {

//   setUser(Localdata);

// }, [Localdata]);
 
  const handLogin = (useremail, password) => {

    if(Localdata && Localdata.admin.find((e) => e.email == useremail && e.password == password )){
       setUser('admin');

    }else if(Localdata && Localdata.employees.find((e) => e.email == useremail && e.password == password )) {
        setUser('user');
        
    }else{
      alert('Invalid')
    }
  }

  

  
  return (
   <>
    {!user ? (
      <Login handLogin={handLogin} />
    ) : user === "admin" ? (
      <AdminDashboard />
    ) : (
      <EmployeeDashboard />
    )}
  </>
  )
}

export default App
