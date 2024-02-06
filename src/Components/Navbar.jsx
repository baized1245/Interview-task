import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-20 bg-slate-50 flex items-center justify-evenly rounded-sm">
      <div>
        <h1 className="font-bold text-xl text-blue-800">Kavinex</h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-orange-700 font-bold underline cursor-pointer">
          Home
        </h1>
        <h1 className="text-blue-800 font-bold cursor-pointer">About us</h1>
        <h1 className="text-blue-800 font-bold cursor-pointer">Property</h1>
        <h1 className="text-blue-800 font-bold cursor-pointer">Pages</h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-blue-800 font-bold cursor-pointer">SignIn</h1>
        <button className="px-2 py-1 bg-orange-800 text-white">
          Add Property
        </button>
      </div>
    </nav>
  )
}

export default Navbar
