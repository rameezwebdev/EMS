

const FailedTask = ({userData}) => {
  return (
    <div className="h-full min-w-75 bg-red-400 rounded-xl">

       <h2 className="text-2xl text-center pt-6 font-bold">
            Failed Task
       </h2>

      {userData.tasks
        .filter((curr) => curr.failed === true)
        .map((curr, index) => (
          <div className="flex flex-col justify-center mt-5"
            key={index}
          >
            <div className="flex justify-between items-center p-5">
              <h3 className="bg-red-400 px-3 py-1 rounded-xl">
                {curr.category}
              </h3>

              <h4 className="px-3 py-1 text-sm">
                {curr.date}
              </h4>
            </div>

            <h2 className="mt-5 px-5 text-2xl font-semibold">
              {curr.title}
            </h2>

            <p className="text-sm px-5 py-2 text-start">
              {curr.description}
            </p>
          </div>
        ))}
    </div>
  )
}

export default FailedTask
// failed