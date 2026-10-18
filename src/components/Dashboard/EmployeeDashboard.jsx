import Header from "../EDBLayout/Header"
import TaskListNumber from "../EDBLayout/TaskListNumber"
import TaskList from "../TaskList/TaskList"




const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
         <Header />
         <TaskListNumber />
         <TaskList />
    </div>
  )
}

export default EmployeeDashboard
