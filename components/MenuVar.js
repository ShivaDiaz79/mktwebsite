import React, { useState } from "react";
import MenuFlotante from "./MenuFlotante";
import ColorChanger from "./ColorChager";
import Link from "next/link";



const MenuVar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

    const [menuDown, setMenuDown] = useState("");
    const abrirMenu = (name) => {
      console.log(name,menuDown);
      if (name === menuDown) {
        setMenuDown("");
        return;
      }
  
      setMenuDown(name);
    };
  
  return (
    <div className="sm:hidden z-50">
      <button
        onClick={handleMenu}
        id="boton"
        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white z-50"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>


      {isOpen && (
        <ColorChanger color={2} className="top-0 fixed right-0 left-0 bottom-0">
          <div className="flex justify-end p-2 pb-6">
            <button
              className="p-2 my-4  rounded-full pr-4"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-white font-bebas">Cerrar </span>
            </button>
          </div>
          <div className="text-xl lg:flex-grow text-center pr-4">
            <Link
              href="/"
              className="flex items-center font-bebas pr-5 mt-4 lg:inline-block lg:mt-0 text-4xl text-gray-400 hover:text-white"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 pl-4 font-bebas ">INICIO</span>
              
              </div>
            </Link>
            <a
              onClick={() => abrirMenu("adn")}
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
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
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
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
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-4xl text-gray-400 hover:text-white"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 pl-4 font-bebas">BLOG</span>
              
              </div>
            </a>
            
          </div>
          <MenuFlotante menuDown={menuDown} />
        
        
        
          <div className="pl-4 justify-start">
            <a
              href="/"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
          <div className="flex-center p-9 justify-center">
            <a href="/">
              <img
                className="h-16 rounded-full w-auto animate-pulse"
                src="/Img/logomkt.png"
                alt="Nombre de tu logo"
              />
            </a>
          </div>
        </ColorChanger>
      )}
      
    </div>
    
  );
};

export default MenuVar;
