   import Link from "next/link";
   import MenuVar from "./MenuVar";
    import { useState } from "react";
    import { BeakerIcon } from '@heroicons/react/24/solid'

    const Navbar=() => {

      const [menuDown, setMenuDown] = useState('')
      const abrirMenu = (name) => {

        if (name === menuDown) {
          setMenuDown('')
          return
        }
        
        setMenuDown(name)
      }

        return (
          <>
    <nav className="flex items-center justify-between flex-wrap bg-gray-900   p-6 aria-hidden:">
       
          <a   href="/">
            <img className="h-1 md:h-1 lg:h-14   w-auto pl-14 rounded-full" src="/Img/logomkt.png" alt="Nombre de tu logo" />
          </a>

      <div id='menu' className="hidden lg:block w-full flex-grow lg:items-center lg:w-auto">

        <div className="text-sm lg:flex-grow text-center">
        <a onClick={() => abrirMenu('inicio')} href="/" class="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          <div class="inline-flex items-center">
            <span class="mr-1">INICIO</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="rotate-180 ml-1.5 h-6 w-6 transform text-[#C61D23]">
                  <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 001.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
                    </svg>   
                      </div>
                          </a>
                          <a onClick={() => abrirMenu('adn')} href="#responsive-header" class="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          <div class="inline-flex items-center">
            <span class="mr-1">ADN</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="rotate-180 ml-1.5 h-6 w-6 transform text-[#C61D23]">
                  <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 001.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
                    </svg>   
                      </div>
                          </a>               
                          <a onClick={() => abrirMenu('servicios')} href="#responsive-header" class="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          <div class="inline-flex items-center">
            <span class="mr-1">SERVICIOS</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="rotate-180 ml-1.5 h-6 w-6 transform text-[#C61D23]">
                  <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 001.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
                    </svg>   
                      </div>
                          </a>
          <a onClick={() => abrirMenu('blog')} href="#responsive-header" class="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          <div class="inline-flex items-center">
            <span class="mr-1">BLOG</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="rotate-180 ml-1.5 h-6 w-6 transform text-[#C61D23]">
                  <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 001.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
                    </svg>   
                      </div>
                          </a>               
          
           </div>

        <div className="ju flex flex-wrap items-center justify-between px-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        
      </div>
      <div className="ju justify-start">
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div>
    </div>
      </div>
      <MenuVar/>
        </nav>

    {  menuDown !== '' &&  <div className="bg-red-200 text-center" >
          {menuDown === 'inicio' && <div> <span>INICIO</span></div>}
          {menuDown === 'adn' && <div> <span>ADN</span></div>}
          {menuDown === 'servicios' && <div> <span>SERVICIOS</span></div>}
          {menuDown === 'blog' && <div> <span>BLOG</span></div>}
        </div>}
    </>
        )
      }
      
      export default Navbar



   
