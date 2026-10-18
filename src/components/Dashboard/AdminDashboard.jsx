import Header from '../EDBLayout/Header'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
     <Header />
    
    <div className="flex justify-center px-4">
        <div className="mt-10 w-full max-w-xl rounded-2xl bg-gray-800 text-white">

        <h1 className="flex items-center gap-2 px-6 py-5 text-2xl    font-bold">
         <FaRegArrowAltCircleLeft />
           Create Task
        </h1>

    <form className="flex w-full flex-col gap-2 px-6 pb-6 sm:px-8">

      <label htmlFor="title" className="mt-2 text-lg">
        Task Title
      </label>
      <input
        id="title"
        type="text"
        placeholder="Make a UI Design"
        className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="description" className="mt-3 text-lg">
        Description
      </label>
      <textarea
        id="task"
        rows={5}
        placeholder="Detailed description of Task"
        className="my-1 w-full resize-none rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="date" className="mt-3 text-lg">
        Date
      </label>
      <input
        id="date"
        type="date"
        className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="assignee" className="mt-3 text-lg">
        Assign To
      </label>
      <input
        id="assignee"
        type="text"
        className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="category" className="mt-3 text-lg">
        Category
      </label>
      <input
        id="category"
        type="text"
        placeholder="Design, Development etc..."
        className="my-1 w-full rounded-md bg-gray-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      </form>
    </div>
  </div>
</div>
  )
}

export default AdminDashboard
