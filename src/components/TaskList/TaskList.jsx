const TaskList = () => {
  return (
    <div id="task" className=" h-[45%] lg:h-[55%] lg:mt-20 w-full  mt-10 flex flex-nowrap gap-8 overflow-x-auto items-center justify-start">
        <div className="h-full min-w-75 bg-emerald-400 rounded-xl ">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-400 px-3 py-1 rounded-xl">High</h3>
                <h4 className="px-3 py-1 text-sm">Oct 2026</h4>
            </div>
            <h2 className="mt-5 px-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className="text-sm px-5 py-2 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero maxime voluptates, similique ratione nihil!</p>
        </div>
       
        <div className="h-full min-w-75 bg-blue-400 rounded-xl ">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-400 px-3 py-1 rounded-xl">High</h3>
                <h4 className="px-3 py-1 text-sm">Oct 2026</h4>
            </div>
            <h2 className="mt-5 px-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className="text-sm px-5 py-2 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero maxime voluptates, similique ratione nihil!</p>
        </div>

        <div className="h-full min-w-75 bg-red-400 rounded-xl ">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-400 px-3 py-1 rounded-xl">High</h3>
                <h4 className="px-3 py-1 text-sm">Oct 2026</h4>
            </div>
            <h2 className="mt-5 px-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className="text-sm px-5 py-2 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero maxime voluptates, similique ratione nihil!</p>
        </div>

        <div className="h-full min-w-75 bg-yellow-400 rounded-xl ">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-400 px-3 py-1 rounded-xl">High</h3>
                <h4 className="px-3 py-1 text-sm">Oct 2026</h4>
            </div>
            <h2 className="mt-5 px-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className="text-sm px-5 py-2 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero maxime voluptates, similique ratione nihil!</p>
        </div>
    </div>
  )
}

export default TaskList
