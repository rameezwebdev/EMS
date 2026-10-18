const tasks = [
    {id:1,count:0, title:"New Task"},
    {id:2,count:1, title:"New Task"},
    {id:3,count:2, title:"New Task"},
    {id:4,count:3, title:"New Task"},
];

const TaskList = () => {
  return (
    <>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {
        tasks.map((task) => {
           return (
             <div
          key={task.id}
          className="h-40 rounded-2xl w-full px-10 py-9 bg-red-400"
        >
          <h2 className="text-3xl font-semibold">{task.count}</h2>
          <h3 className="text-xl font-medium">{task.title}</h3>
        </div>
           )
        })
      }
    </div>  
    </>  
  )
}

export default TaskList
