const Header = ({userData, handleLogout }) => {
  
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium">Hello! <span className="text-3xl font-semibold pl-4 uppercase">{userData?.name}</span></h1>
      <button onClick={handleLogout} className="bg-red-500 px-2.5 py-1 rounded-md cursor-pointer">Log Out</button>
    </div>
  )
}

export default Header
