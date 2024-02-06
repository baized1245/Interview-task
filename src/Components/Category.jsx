import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Category = () => {
  return (
    <>
      <div className="mt-24 mb-5 items-center w-full">
        <h1 className="font-semibold text-3xl text-blue-700 ml-16">
          Brows By Categories
        </h1>
      </div>
      <div className="flex items-center justify-evenly ">
        <div className="flex items-center justify-center gap-3 bg-slate-50">
          <img
            className="w-56 h-48 rounded-md"
            src="https://img.freepik.com/free-photo/cozy-living-room-interior-with-panoramic-window_1262-12322.jpg?size=626&ext=jpg&ga=GA1.2.1162881527.1690013272&semt=country_rows_v1"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-xl text-blue-700">Appertment</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-blue-700">22 Property</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-slate-50">
          <img
            className="w-56 h-48 rounded-md"
            src="https://img.freepik.com/free-photo/cozy-living-room-interior-with-panoramic-window_1262-12322.jpg?size=626&ext=jpg&ga=GA1.2.1162881527.1690013272&semt=country_rows_v1"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-xl text-blue-700">Appertment</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-blue-700">22 Property</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-slate-50">
          <img
            className="w-56 h-48 rounded-md"
            src="https://img.freepik.com/free-photo/cozy-living-room-interior-with-panoramic-window_1262-12322.jpg?size=626&ext=jpg&ga=GA1.2.1162881527.1690013272&semt=country_rows_v1"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-xl text-blue-700">Appertment</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="text-blue-700">22 Property</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
