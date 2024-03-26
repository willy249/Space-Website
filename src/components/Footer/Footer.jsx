import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-gray-800 text-white px-5 relative z-50">
      <section className=" max-w-[1200px] mx-auto">
        {/* 信箱輸入框 & 相關連結 */}
        <div className=" grid md:grid-cols-3 py-5">
          {/* 部分一_信箱輸入框 */}
          <div className=" py-8 px-4">
            <h1 className=" text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive <span className=" font-bold">Update</span> straight
              to your inbox
            </p>
            <br />
            <div className=" flex items-center h-10">
              <input
                type="text"
                className=" py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-500 border-gray-200 border-2"
                placeholder="Email"
              />
              <button className="btn-primary">OK</button>
            </div>
          </div>

          {/* 部分二_相關連結 */}
          <div className=" grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* 2-1 */}
            <div>
              <div className=" py-8 px-4">
                <h1 className=" text-xl font-bold mb-3">Quick Links</h1>
                <ul className=" flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 2-2 */}
            <div>
              <div className=" py-8 px-4">
                <h1 className=" text-xl font-bold mb-3">Quick Links</h1>
                <ul className=" flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 2-3 */}
            <div className=" col-span-2 sm:col-span-1">
              <div className=" py-8 px-4">
                <h1 className=" text-xl font-bold mb-3">Contact Us</h1>
                <div className=" space-y-3">
                  <div className=" flex flex-wrap items-center gap-2">
                    <HiLocationMarker />
                    <p>xx, xx xx</p>
                  </div>
                  <div className=" flex flex-wrap items-center gap-2 mt-3">
                    <MdMessage />
                    <p>abc@gmail.com</p>
                  </div>
                  <div className=" flex flex-wrap items-center gap-2 mt-3">
                    <MdCall />
                    <p>+886 123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 社群 */}
        <div className=" hidden sm:block">
          <div className=" py-6 border-t-2 border-gray-400">
            <div className=" flex items-center justify-center gap-4 pb-4">
              <a href="#">
                <FaInstagram size={30} />
              </a>
              <a href="#">
                <FaFacebook size={30} />
              </a>
              <a href="#">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
