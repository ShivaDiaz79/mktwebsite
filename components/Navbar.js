import Link from "next/link";
import MenuVar from "./MenuVar";
import { useState } from "react";

import MenuFlotante from "./MenuFlotante";


const Navbar = () => {
  const [menuDown, setMenuDown] = useState("");
  const abrirMenu = (name) => {
    if (name === menuDown) {
      setMenuDown("");
      return;
    }

    setMenuDown(name);
  };
  

  return (
    <>
   
      <nav className="bg-black sm:bg-pink-600 flex items-center justify-between  p-2 ">
      <a href="/">
          <img
            className="h-0 md:h-1 lg:h-16  sm:pl-14 "
            src="/Img/logo2.png"
            alt="logo mkt"
          />
        </a>
   

        <div
          id="menu"
          className="hidden lg:block w-full flex-grow lg:items-center lg:w-auto"
        >
          <div className="text-sm lg:flex-grow text-center">
            <a
              href="/"
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-neutral-950"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 font-bebas text-4xl px-5">INICIO</span>
              </div>
            </a>
            <a
              onClick={() => abrirMenu("adn")}
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-neutral-950"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 font-bebas text-4xl px-5">ADN</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="rotate-180 ml-1.5 h-6 w-6 transform text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 001.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              onClick={() => abrirMenu("servicios")}
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-neutral-950"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 font-bebas text-4xl px-5 ">SERVICIOS</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className=" text-4xl rotate-180 ml-1.5 h-6 w-6 transform text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 001.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="blog"
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-neutral-950"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 font-bebas text-4xl px-5">BLOG</span>
              </div>
            </a>
          </div>
          

          <div className=" flex flex-end items-center justify-between px-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6"></div>
            <div className=" justify-start">
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-500 border-gray-500 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                ¡HABLEMOS!
              </a>

            </div>
         
          </div>
  
       
        
          <MenuFlotante menuDown={menuDown} />
        </div>
     

        <MenuVar />
      </nav>
      

      
    </>
  );
};

export default Navbar;
