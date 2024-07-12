import logo from "../../assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoReorderThreeSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-[#1B1C1E] flex items-center">
      <div className="navbar">
        <div className="flex-1 gap-2">
          <img src={logo} alt="" />
          <h1 className="text-xl text-white font-bold">Logoipsum</h1>
        </div>
        {/* Icons */}
        <div className="gap-2 hidden md:flex lg:flex">
          <div className="bg-[#2B2B2B] rounded-full">
            <IoIosSearch size="26" className="text-white p-1 font-bold" />
          </div>
          <div className="bg-[#2B2B2B] rounded-full">
            <FaPencilAlt size="26" className="text-white p-[5.5px] font-bold" />
          </div>
          <div className="bg-[#2B2B2B] rounded-full">
            <MdEmail size="26" className="text-white p-1 font-bold" />
          </div>
          <div className="bg-[#2B2B2B] rounded-full">
            <IoNotifications size="26" className="text-white p-1 font-bold" />
          </div>
          <div className="bg-[#2B2B2B] rounded-full">
            <BsThreeDots size="26" className="text-white p-1 font-bold" />
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-6 rounded-full mr-5">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>

        {/* small scren */}
        <div className="flex md:hidden lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-6 rounded-full mr-5">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="bg-[#2B2B2B] rounded-full">
            <IoReorderThreeSharp
              size="26"
              className="text-white p-1 font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
