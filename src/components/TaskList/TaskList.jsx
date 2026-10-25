import ActiveTask from "./ActiveTask"
import CompleteTask from "./CompleteTask"
import NewTask from "./NewTask"

const TaskList = ({userData}) => {
  return (
    <div className="h-[50%] lg:mt-20 min-w-full  mt-10 grid lg:grid-cols-4 gap-12 md:grid-cols-2">
       
       <ActiveTask userData = {userData}/>
       <NewTask userData = {userData}/>
       <CompleteTask userData = {userData}/>

    </div>
  )
}

export default TaskList
