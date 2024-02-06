import React from 'react'
import { IoIosCheckbox } from 'react-icons/io'
import { FaArrowRight } from 'react-icons/fa'

const FindMore = () => {
  return (
    <>
      <div className="mt-36 mb-10 w-[1200px] ml-36 flex space-x-52">
        <div className="">
          <img
            className="w-80 h-80 rounded-md object-cover"
            src="https://img.freepik.com/free-psd/modern-interior-design-living-room_176382-1266.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=sph"
            alt=""
          />
          <img
            className="w-44 h-40 -mt-[300px] ml-60 object-cover rounded-md"
            src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=sph"
            alt=""
          />
          <img
            className="w-72 h-36 ml-52 mt-20 rounded-md"
            src="https://img.freepik.com/free-photo/cozy-home-interior-anime-style_23-2151176340.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=sph"
            alt=""
          />
        </div>
        <div>
          <p className="text-blue-900 text-base">Find More Chose</p>
          <div className="divider divider-error w-36 -mt-2"></div>
          <h1 className="text-3xl text-black font-bold">
            Why You Chose Our <br /> Kavinax Property
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            deleniti optio dicta et dolorem, tempora culpa fugiat beatae quidem
            architecto!
          </p>
          <div className="flex gap-10">
            <div className="flex items-center">
              <IoIosCheckbox size={20} className="text-orange-800" />
              <p className=" font-semibold">Trusted By Thousands</p>
            </div>

            <div className="flex items-center">
              <IoIosCheckbox size={20} className="text-orange-800" />
              <p className=" font-semibold">Private Securety</p>
            </div>
          </div>
          <div className="flex gap-10 my-5">
            <div className="flex items-center">
              <IoIosCheckbox size={20} className="text-orange-800" />
              <p className=" font-semibold">Evaluate Property</p>
            </div>

            <div className="flex items-center ml-8">
              <IoIosCheckbox size={20} className="text-orange-800" />
              <p className=" font-semibold">Find a Good Side</p>
            </div>
          </div>
          <button className="btn bg-blue-950 text-white py-1 px-3">
            Explore More <FaArrowRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </>
  )
}

export default FindMore
