import Header from "../EDBLayout/Header"
import TaskListNumber from "../EDBLayout/TaskListNumber"
import TaskList from "../TaskList/TaskList"




const EmployeeDashboard = ({userData, handleLogout}) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
         <Header userData = {userData} handleLogout = {handleLogout}/>
         <TaskListNumber  userData = {userData}/>
         <TaskList userData = {userData}/>
    </div>
  )
}

export default EmployeeDashboard
