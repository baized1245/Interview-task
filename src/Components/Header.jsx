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
    <div className="bg-blue-900 h-14 flex items-center justify-evenly ">
      <div className="flex items-center justify-center space-x-4">
        {/* child */}
        <div className="flex text-white items-center justify-center gap-2">
          <FaLocationDot size={20} className="text-orange-700" />
          <span>7124 landmark Tower, New Yourk</span>
        </div>
        <div className="flex text-white items-center justify-center gap-2">
          <MdEmail size={20} className="text-orange-700" />{' '}
          <span>Support@yourdomain.com</span>
        </div>
        <div className="flex text-white items-center justify-center gap-2">
          <FaPhone size={20} className="text-orange-700" />{' '}
          <span>+613843222</span>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 ">
        <FaFacebook size={20} className="text-orange-700 cursor-pointer" />
        <FaInstagram size={20} className="text-orange-700 cursor-pointer" />
        <FaTwitter size={20} className="text-orange-700 cursor-pointer" />
        <FaLinkedin size={20} className="text-orange-700 cursor-pointer" />
        <FaYoutube size={20} className="text-orange-700 cursor-pointer" />
      </div>
    </div>
  )
}

export default Header
