import React from "react";
import Image from "next/image";

const ColumImg = () => {
  return (
<section className="py-10 lg:py-20 flex justify-cente">
  <div className="relative z-10 flex flex-col bg-white spx-4 sm:px-6 lg:px-8">
    <div className="flex flex-col w-full shadow-button  rounded-lg py-8 px-8 justify-center items-center  bg-pink-600 mb-6">
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-2 text-center">
        Nos basamos en los resultados
      </h2>
      <p className="max-w-full sm:max-w-2xl lg:max-w-4xl text-sm sm:text-base lg:text-lg font-normal text-white text-center">
        Nuestros resultados son nuestro fuerte, trabajar con MKT no solo es una experiencia única e inolvidable, si no que también otorga resultados que cumplen con las necesidades de cada cliente.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
      <div className="   border border-gray-950 flex flex-col items-center max-w-full lg:max-w-1/3 shadow-button rounded-lg py-8 px-6 mb-4 sm:mb-0">
        <div className=" w-32 sm:w-48 h-32 sm:h-48">
          <img
            className="object-cover w-full h-full"
            src="/Img/equipo.png"
            alt="equipo humano"
          />
        </div>
        <h1 className="uppercase text-center font-bebas text-2xl sm:text-4xl font-semibold text-black mb-2">
          EQUIPO HUMANO
        </h1>
        <p className="text-center text-sm sm:text-base text-black font-normal">
          Queremos que nuestros empleados crezcan profesional, personal y financieramente 
        </p>
      </div>

      <div className="flex flex-col items-center border border-gray-950  max-w-full lg:max-w-1/3 shadow-button rounded-lg py-8 px-6 mb-4 sm:mb-0">
        <div className="w-32 sm:w-48 h-32 sm:h-48">
          <img
            className="object-cover w-full h-full"
            src="/Img/compañia.png"
            alt="Compañía"
          />
        </div>
        <h1 className="uppercase text-center font-bebas text-2xl sm:text-4xl font-semibold text-black mb-2">
          COMPAÑIA
        </h1>
        <p className="text-center text-sm sm:text-base text-black font-normal">
          Estamos alineados con nuestro propósito y misión como empresa para así satisfacer las necesidades del mercado y el mundo.
        </p>
      </div>

      <div className="flex flex-col items-center border border-gray-950 max-w-full lg:max-w-1/3 shadow-button rounded-lg py-8 px-6 ">
        <div className="w-32 sm:w-48 h-32 sm:h-48">
          <img
            className="object-cover w-full h-full"
            src="/Img/partners.png"
            alt="partners"
          />
        </div>
        <h1 className="uppercase text-center  font-bebas text-2xl sm:text-4xl font-semibold text-black mb-2">
          PARTNERS
        </h1>
        <p className="text-center text-sm sm:text-base text-black font-normal">
          Cumplir con los objetivos y metas de nuestros clientes es fundamental para asegurar un crecimiento y diferenciarlo del mercado.
        </p>
      </div>

        </div>
      </div>
    </section>
  );
};

export default ColumImg;
