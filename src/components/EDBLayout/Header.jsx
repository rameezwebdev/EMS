const Header = (userData ) => {
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium">Hello! <br /> <span className="text-3xl font-semibold">{userData.userData.name}</span></h1>
      <button className="bg-red-500 px-2.5 py-1 rounded-md cursor-pointer">Log Out</button>
    </div>
  )
}

export default Header
