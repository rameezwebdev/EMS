import AllTasks from '../EDBLayout/AllTasks';
import CreateTask from '../EDBLayout/CreateTask';
import Header from '../EDBLayout/Header'

const AdminDashboard = ({empData, handleLogout, handleCreateTask}) => {
  return (
    <div className='px-6 py-6 h-screen'>
     <Header handleLogout = {handleLogout}/>
     <CreateTask empData = {empData} handleCreateTask = {handleCreateTask}/>
     <AllTasks />
</div>
  )
}

export default AdminDashboard
