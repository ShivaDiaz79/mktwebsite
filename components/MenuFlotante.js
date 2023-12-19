
import Links from 'next/link';


const MenuFlotante = ({ menuDown }) => {
  return (
    <>
    
      {menuDown !== '' && (
        <div className="flex-cols sm:mx-52 justify-center ml-20 sm:ml-80 p-4 z-50 ">
          {menuDown === 'servicios' && (
            <>
              <ul>
                <a href="#">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas sm:pl-96 hover:text-gray-400"> TAILOR MADE</span>
                </a>
              </ul>
              <ul>
                <a href="#">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas sm:pl-96 hover:text-black">COACHING Y MENTORIA</span>
                </a>
              </ul>
              <ul>
                <a href="#">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas sm:pl-96 hover:text-black">MARKETING INTEGRAL</span>
                </a>
              </ul>
              <ul>
                <a href="#">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas sm:pl-96 hover:text-black">MARKETING DIGITAL Y NEGOCIOS</span>
                </a>
              </ul>
              <ul>
                <a href="#">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas sm:pl-96 hover:text-black">BRANDING PERSONAL</span>
                </a>
              </ul>
              <ul>
                <a href="#">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas sm:pl-96 hover:text-black"> 360</span>
                </a>
              </ul>
            </>
          )}
          {menuDown === 'adn' && (
            <>
              <ul>
                <a href="adn">
                  <span className=" text-gray-400  text-left text-2xl font-bold font-bebas sm:pl-60 hover:text-black">SOBRE MKT</span>
                </a>
              </ul>
              </>
              )}
              {menuDown === 'adn' && (
                 <>
              <ul>
                <a href="talentohumano">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas sm:pl-60 hover:text-black">TALENTO HUMANO</span>
                </a>
              </ul>
              </>
              )}
              {menuDown === 'adn' && (
                <>
              <ul>
                <a href="nuestramision">
                  <span className=" text-gray-400 text-2xl font-bold font-bebas  sm:pl-60 hover:text-black">NUESTRA MISION</span>
                </a>
              </ul>
            </>
          )}
        </div>
      )}
    
       </>
        
  );
};

export default MenuFlotante
