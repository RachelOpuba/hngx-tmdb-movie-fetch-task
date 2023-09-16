import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/red-menu.png";
import { FaSearch } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary bg-transparent text-white absolute top-0 w-full max-w-[1440px] p-3 h-20  flex justify-between items-center ps-3 sm:ps-[40px] lg:px-[80px]">
        <div className="flex lg:gap-6 gap-2 items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[40px] sm:h-[50px]" />
          </Link>
          <p className=" hidden sm:block font-bold">MovieBox</p>
        </div>
        <div className="flex  justify-between lg:w-[70%] sm:w-[60%] max-w-[525px] items-center h-[36px] px-[10px] rounded-md border-2">
          <input
            type="text"
            className="bg-transparent border-none outline-none placeholder:text-white placeholder:text-sm w-[90%] border"
            placeholder="What do you want to watch?"
          />
          <FaSearch className=" hidden sm:block" />
        </div>
        <div className="flex justify-center items-center lg:gap-[27px] gap-2">
          <button className="hidden sm:block font-bold">Sign in</button>
          <button className="bg-[#be123c] h-[36px] w-[36px] flex justify-center items-center rounded-full">
            <Link to="/">
              {" "}
              <TbMenu className="text-[24px]" />
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
