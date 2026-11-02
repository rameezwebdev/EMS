import AllTasks from '../EDBLayout/AllTasks';
import CreateTask from '../EDBLayout/CreateTask';
import Header from '../EDBLayout/Header'

const AdminDashboard = ({handleLogout}) => {
  return (
    <div className='px-6 py-6 h-screen'>
     <Header handleLogout = {handleLogout}/>
     <CreateTask />
     <AllTasks />
</div>
  )
}

export default AdminDashboard
