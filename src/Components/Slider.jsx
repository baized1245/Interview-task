import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa6'

const Slider = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center w-full relative">
        <div className="bg-blue-800 w-screen h-[418px] flex flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl mt-14">
            Discover Most Suitable property
          </h1>
          <p className="text-white text-lg ml-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            necessitatibus possimus rerum velit laboriosam aspernatur quam
            similique numquam atque quos?
          </p>
        </div>
        <div className="rounded-sm w-screen ">
          <img
            className="object-cover w-[100%] h-[418px]"
            src="https://img.freepik.com/free-photo/huge-swimming-pool-near-hotel-resort-san-teodoro-sardinia_181624-9498.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais"
            alt=""
          />
        </div>
      </div>

      <div className="flex absolute top-48">
        <button className="btn-circle ml-6 ring ring-orange-700 px-1 py-1 flex items-center justify-center">
          <FaArrowLeft className="text-center text-white" />
        </button>
        <button className="btn-circle ml-[1390px] bg-orange-700 px-1 py-1 flex items-center justify-center">
          <FaArrowRight className="text-center text-white" />
        </button>
      </div>

      <div className="relative bg-orange-700 -mt-40 w-1/2 mx-auto">
        <div className="text-white flex items-center justify-center gap-4">
          <p>Sell</p>
          <button className="pt-0.5  bg-white">
            <p className="text-orange-700">Rent</p>
          </button>
          <p>Buy</p>
        </div>
        <div className="flex items-center justify-evenly">
          <p className="text-white font-semibold">Type</p>
          <p className="text-white font-semibold">Your Location</p>
          <p className="text-white font-semibold">Bed/Bathrooms</p>
          <p className="text-white font-semibold">Price</p>
          <p className="text-white font-semibold">Search</p>
        </div>
        <div className="flex items-center justify-evenly">
          <select className="select w-32 h-10 mb-2">
            <option>Property Type</option>
            <option>Game of Thrones</option>
          </select>
          <select className="select w-32 h-10 mb-2 ">
            <option>Your Location</option>
            <option>Game of Thrones</option>
          </select>
          <select className="select w-32 h-10 mb-2">
            <option>Bed/Bathrooms</option>
            <option>Game of Thrones</option>
          </select>
          <select className="select w-32 h-10 mb-2">
            <option>Price</option>
            <option>Game of Thrones</option>
          </select>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-28 h-12 mb-2 text-center outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
