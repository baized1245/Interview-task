import React from 'react'
import {
  FaLocationDot,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Header = () => {
  return (
    <div className="bg-blue-900 h-14 flex items-center justify-evenly rounded-sm ">
      <div className="flex items-center justify-center space-x-4">
        {/* child */}
        <div className="flex text-white  items-center justify-center gap-2">
          <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
            <FaLocationDot size={20} className="text-orange-700 text-center" />
          </button>
          <span>7124 landmark Tower, New Yourk</span>
        </div>
        <div className="flex text-white items-center justify-center gap-2">
          <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
            <MdEmail size={20} className="text-orange-700 text-center" />
          </button>
          <span>Support@yourdomain.com</span>
        </div>
        <div className="flex text-white items-center justify-center gap-2">
          <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
            <FaPhone size={20} className="text-orange-700 text-center" />
          </button>
          <span>+613843222</span>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 ">
        <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
          <FaFacebook size={20} className="text-orange-700 cursor-pointer" />
        </button>
        <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
          <FaInstagram size={20} className="text-orange-700 cursor-pointer" />
        </button>
        <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
          <FaTwitter size={20} className="text-orange-700 cursor-pointer" />
        </button>
        <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
          <FaLinkedin size={20} className="text-orange-700 cursor-pointer" />
        </button>
        <button className="btn-circle bg-white px-1 py-1 flex items-center justify-center">
          <FaYoutube size={20} className="text-orange-700 cursor-pointer" />
        </button>
      </div>
    </div>
  )
}

export default Header
