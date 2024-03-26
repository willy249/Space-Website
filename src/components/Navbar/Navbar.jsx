import { useState } from "react";
import Loge from "../../assets/logo.png";
// react-icons
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const NavLinks = [
  {
    id: 1,
    name: "About",
    link: "#",
  },
  {
    id: 2,
    name: "Technology",
    link: "#",
  },
  {
    id: 3,
    name: "Galaxy",
    link: "#",
  },
  {
    id: 4,
    name: "Satellite",
    link: "#",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div
      data-aos="fade-down"
      className=" fixed top-0 right-0 w-full z-[9999] bg-black/10 backdrop:blur-sm py-4 sm:py-4"
    >
      <div className=" container">
        <div className=" flex justify-between items-center">
          {/* 1_logo */}
          <div className=" flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Loge} alt="" className=" w-10" />
            <span>SPACE</span>
          </div>

          {/* 2_導覽列 */}
          <div className=" text-white hidden md:block">
            <ul className=" flex items-center gap-6 text-xl py-4 sm:py-0">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    className=" hover:text-[#00C2FF] hover:border-b-2 hover:border-b-[#DD0BFF] transition-colors duration-200"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3_登入按鈕 & 移動裝置導覽列*/}
          <div className=" flex items-center gap-3">
            {/* 登入按鈕 */}
            <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
              Login
            </button>
            {/* 移動裝置導覽列 */}
            <div className=" block md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer text-white"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className=" cursor-pointer text-white"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
