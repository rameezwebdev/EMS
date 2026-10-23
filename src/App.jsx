import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalData, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  const [user, setUser] = useState();

  
  const [userData, setUserData] = useState(null);
  
  const Localdata = useContext(AuthContext);
  
  useEffect(() => {

  if(Localdata) {
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(loggedInUser.role)
    }
  }

}, [Localdata]);

 
  const handLogin = (useremail, password) => {
  if (
    Localdata &&
    Localdata.admin.find(
      (e) => e.email === useremail && e.password === password
    )
  ) {
    setUser("admin");

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin" })
    );

  } else if (Localdata && Localdata.employees) {
    const employee = Localdata.employees.find(
      (e) => e.email === useremail && e.password === password
    );

    if (employee) {
      setUser("user");
      setUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "user",
          employeeId: employee.id
        })
      );
    } else {
      alert("Invalid");
    }
  } else {
    alert("Employee data not available");
  }
};

  

  
  return (
   <>
    {!user ? (
      <Login handLogin={handLogin} />
    ) : user === "admin" ? (
      <AdminDashboard />
    ) : (
      <EmployeeDashboard  userData = {userData}/>
    )}
  </>
  )
}

export default App
