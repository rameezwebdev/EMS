import { FaRegArrowAltCircleLeft } from "react-icons/fa"

const CreateTask = () => {
  return (
    <div className="flex justify-center  py-4">
  <div className="mt-4 w-full max-w-full rounded-2xl bg-gray-800 text-white">

  
    <h1 className="flex items-center gap-2 px-6 py-5 text-2xl font-bold">
      <FaRegArrowAltCircleLeft />
      Create Task
    </h1>

    <form className="grid grid-cols-1 gap-28 px-6 pb-6 sm:px-8 lg:grid-cols-2">

      {/* Left Side */}
      <div className="flex flex-col gap-2">

        <label htmlFor="title" className="mt-2 text-lg">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Make a UI Design"
          className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-red-500"
        />

        <label htmlFor="date" className="mt-3 text-lg">
          Date
        </label>
        <input
          id="date"
          type="date"
          className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-red-500"
        />

        <label htmlFor="assignee" className="mt-3 text-lg">
          Assign To
        </label>
        <input
          id="assignee"
          type="text"
          placeholder="Enter name"
          className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-red-500"
        />

        <label htmlFor="category" className="mt-3 text-lg">
          Category
        </label>
        <input
          id="category"
          type="text"
          placeholder="Design, Development etc..."
          className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-red-500"
        />

      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-2">

        <label htmlFor="description" className="mt-2 text-lg">
          Description
        </label>
        <textarea
          id="description"
          rows={8}
          placeholder="Detailed description of Task"
          className="my-1 min-h-48 w-full resize-y rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-red-500 "
        />

        <button
          type="submit"
          className="mt-3 w-full rounded-md bg-red-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Create Task
        </button>

      </div>

    </form>
  </div>
</div>
  )
}

export default CreateTask
