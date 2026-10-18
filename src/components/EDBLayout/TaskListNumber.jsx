const tasks = [
    {id:1,count:0, title:"New Task", bgColor:"bg-blue-400"},
    {id:2,count:1, title:"New Task", bgColor:"bg-green-400"},
    {id:3,count:2, title:"New Task", bgColor:"bg-yellow-400"},
    {id:4,count:3, title:"New Task", bgColor:"bg-red-400"},
];

const TaskListNumber = () => {
  return (
    <>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {
        tasks.map((task) => {
          const {bgColor, count, title} = task;
           return (
             <div
          key={task.id}
          className={`h-40 rounded-2xl w-full px-10 py-9 ${bgColor}`}
        >
          <h2 className="text-3xl font-semibold">{count}</h2>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
           )
        })
      }
    </div>  
    </>  
  )
}

export default TaskListNumber
