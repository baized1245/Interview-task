import React from 'react'
import { FaArrowRight, FaLinkedin, FaPhone } from 'react-icons/fa'
import { IoIosCheckbox } from 'react-icons/io'

const About = () => {
  return (
    <>
      <div className="mt-20 mb-4 text-center relative">
        <h1 className="text-blue-700 font-semibold">About Us</h1>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <div className="w-full shadow-md">
          <img
            className="w-full h-auto object-cover rounded-lg "
            src="https://img.freepik.com/free-photo/modern-luxury-apartments-reflect-futuristic-urban-growth-generated-by-ai_188544-26162.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.2.1162881527.1690013272&semt=country_rows_v1"
            alt=""
          />
        </div>
        <div className="w-full">
          <h1 className="font-semibold text-black text-3xl">
            We Specialize In Quality <br /> Home Renovations
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla
            quidem illo vero ratione. Neque dolore sunt harum incidunt non!
          </p>
          <p className="flex items-center">
            <IoIosCheckbox size={20} />
            <span className="text-black font-semibold">
              Outstanding Property.
            </span>
          </p>
          <p className="flex items-center">
            <IoIosCheckbox size={20} />
            <span className="text-black font-semibold">
              Provide The Best Service.
            </span>
          </p>
          <p className="flex items-center">
            <IoIosCheckbox size={20} />
            <span className="text-black font-semibold">
              Modern City Location.
            </span>
          </p>
          <p className="flex items-center">
            <IoIosCheckbox size={20} />
            <span className="text-black font-semibold">
              Professional & Experience Human Resource.
            </span>
          </p>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            laboriosam voluptatum culpa ab vero nesciunt autem doloribus nobis
            cum obcaecati.
          </p>
          <button className=" bg-blue-700 cursor-pointer py-2 px-2 text-white flex items-center justify-center gap-1">
            Explore More
            <FaArrowRight size={20} className="text-white" />
          </button>
          <div className="flex gap-7">
            <div className="flex items-center justify-center gap-5">
              <img
                className="w-11 h-11 rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=country_rows_v1"
                alt=""
              />
              <div>
                <p>
                  <span className="text-orange-700 font-semibold">
                    David Smith
                  </span>
                  CEO of Kavinax Property
                </p>
                <h1 className="">
                  <FaPhone size={20} />{' '}
                  <span>
                    Call For Booking Appointment <br /> Date :{' '}
                    <span className="text-orange-700">+090290292</span>{' '}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -mt-44 ml-72 ring-8 ring-orange-700 rounded-md ">
        <img
          className="w-80 h-auto object-cover"
          src="https://img.freepik.com/free-photo/cozy-living-room-interior-with-panoramic-window_1262-12322.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.2.1162881527.1690013272&semt=country_rows_v1"
          alt=""
        />
      </div>
    </>
  )
}

export default About
