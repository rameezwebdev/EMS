const TaskListNumber = ({ userData }) => {
  const { active, newTask, completed, failed } = userData.taskCount;

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="h-40 rounded-2xl w-full px-10 py-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="h-40 rounded-2xl w-full px-10 py-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>

      <div className="h-40 rounded-2xl w-full px-10 py-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="h-40 rounded-2xl w-full px-10 py-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;