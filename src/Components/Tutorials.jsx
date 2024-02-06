import React from 'react'
import { RiFileVideoFill } from 'react-icons/ri'

const Tutorials = () => {
  return (
    <div className="mt-16 mb-5 relative">
      <div className="w-full relative">
        <img
          className="w-full h-96 object-cover"
          src="https://img.freepik.com/free-photo/interior-with-bid-dining-room-modern-private-house_181624-17504.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais"
          alt=""
        />
      </div>
      <div className="absolute -mt-72 ml-[550px]">
        <button className="py-3 px-3 bg-white ring-4 ring-orange-900 btn-circle my-5 ml-40">
          <RiFileVideoFill size={25} className="text-orange-800" />
        </button>
        <h1 className="font-bold text-3xl text-white">
          Watch Our Video Tutorial
        </h1>
      </div>
      <div className="flex items-center justify-evenly absolute gap-16 bg-slate-50 -mt-36 rounded-md ml-64 w-[900px]  h-52">
        {/*  */}
        <div className="w-24 h-24 rounded-full ring-2 ring-blue-900 flex items-center justify-center ">
          <div className="w-20 h-20 rounded-full ring-2 ring-blue-900 flex items-center justify-center">
            <p className="">10000</p>
          </div>
        </div>
        <div className="w-24 h-24 rounded-full ring-2 ring-blue-900 flex items-center justify-center ">
          <div className="w-20 h-20 rounded-full ring-2 ring-blue-900 flex items-center justify-center">
            <p className="">10000</p>
          </div>
        </div>
        <div className="w-24 h-24 rounded-full ring-2 ring-blue-900 flex items-center justify-center ">
          <div className="w-20 h-20 rounded-full ring-2 ring-blue-900 flex items-center justify-center">
            <p className="">10000</p>
          </div>
        </div>
        <div className="w-24 h-24 rounded-full ring-2 ring-blue-900 flex items-center justify-center ">
          <div className="w-20 h-20 rounded-full ring-2 ring-blue-900 flex items-center justify-center">
            <p className="">10000</p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Tutorials
