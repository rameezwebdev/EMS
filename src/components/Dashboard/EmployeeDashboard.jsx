import Header from "../EDBLayout/Header"
import TaskListNumber from "../EDBLayout/TaskListNumber"
import TaskList from "../TaskList/TaskList"




const EmployeeDashboard = ({userData}) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
         <Header userData = {userData}/>
         <TaskListNumber  userData = {userData}/>
         <TaskList />
    </div>
  )
}

export default EmployeeDashboard
