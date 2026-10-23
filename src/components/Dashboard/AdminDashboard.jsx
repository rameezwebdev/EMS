import AllTasks from '../EDBLayout/AllTasks';
import CreateTask from '../EDBLayout/CreateTask';
import Header from '../EDBLayout/Header'

const AdminDashboard = ({user}) => {
  console.log(user)
  return (
    <div className='px-6 py-6 h-screen'>
     <Header user={user}/>
     <CreateTask />
     <AllTasks />
</div>
  )
}

export default AdminDashboard
