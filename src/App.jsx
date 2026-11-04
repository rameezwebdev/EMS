import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
// import { setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"
import { saveEmployees, setLocalStorage } from "./utils/localStorage"

const App = () => {

  // useState for storing role of user
  const [user, setUser] = useState();

  // useState for storing login user data
  const [userData, setUserData] = useState(null);

  const [authChecked, setAuthChecked] = useState(false);

//   useState to store employess data
  const [empData, setEmpData] = useState();
  
  const Localdata = useContext(AuthContext);
  
  
 useEffect(() => {

    setLocalStorage();
  
    if (!Localdata) return;

   const employData = Localdata.employees;
   setEmpData(employData);
    

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


   useEffect(() => {
  if (Array.isArray(empData)) {
    saveEmployees(empData);
  }
}, [empData]);

 
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

    const employee = empData?.find((e) =>
       e.email === useremail &&
       e.password === password
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

//  AssignTask
const handleCreateTask = (newTask, employeeId) => {
  setEmpData((prevEmployees) =>
    prevEmployees.map((employee) => {
      if (employee.id === employeeId) {
        return {
          ...employee,

          tasks: [
            ...(employee.tasks || []),
            newTask,
          ],

          taskCount: {
            ...employee.taskCount,
            newTask:
              (employee.taskCount?.newTask || 0) + 1,
          },
        };
      }

      return employee;
    })
  );
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
            <AdminDashboard empData = {empData}   handleCreateTask={handleCreateTask} handleLogout = {handleLogOut}/>
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
