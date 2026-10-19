import AllTasks from '../EDBLayout/AllTasks';
import CreateTask from '../EDBLayout/CreateTask';
import Header from '../EDBLayout/Header'

const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen'>
     <Header />
     <CreateTask />
     <AllTasks />
</div>
  )
}

export default AdminDashboard
