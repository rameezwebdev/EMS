import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalData, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  // useState for storing role of user
  const [user, setUser] = useState();

  // useState for storing login user data
  const [userData, setUserData] = useState(null);

  const [authChecked, setAuthChecked] = useState(false);
  
  const Localdata = useContext(AuthContext);
  
 useEffect(() => {

    // setLocalStorage()
    
    if (!Localdata) return;

    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {
        try {
            const loggedInUser = JSON.parse(storedUser);

            if (loggedInUser.role === "admin") {
                setUser("admin");
            } 
            else if (loggedInUser.role === "user") {
                const employee = Localdata.employees?.find(
                    (e) => e.id === loggedInUser.employeeId
                );

                if (employee) {
                    setUser("user");
                    setUserData(employee);
                } else {
                    localStorage.removeItem("loggedInUser");
                }
            }
        } catch (error) {
            localStorage.removeItem("loggedInUser");
        }
    }

    setAuthChecked(true);

}, [Localdata]);

 
  // Login Function
 const handLogin = (useremail, password) => {

    if (!Localdata || !Localdata.admin || !Localdata.employees) {
        console.log("Data is not loaded yet");
        return;
    }

    const admin = Localdata.admin.find(
        (e) => e.email === useremail && e.password === password
    );

    if (admin) {
        setUser("admin");

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ role: "admin" })
        );

        return;
    }

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
        alert("Invalid email or password");
    }
};

// Longout Function
const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    setUserData(null);
    setUser(null);
}  

  
  return (
   <>
    {!authChecked ? (
            <div>Loading...</div>
        ) : !user ? (
            <Login handLogin={handLogin} />
        ) : user === "admin" ? (
            <AdminDashboard />
        ) : (
            <EmployeeDashboard
                userData={userData}
                handleLogout={handleLogOut}
            />
        )}
  </>
  )
}

export default App
