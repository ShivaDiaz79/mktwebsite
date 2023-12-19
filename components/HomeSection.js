import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useWindowSize } from "./hooks/UseWindowSize";
import Button from "./Button";

const HomeSection = ({
  text,
  imagePath,
  imagenIzquierda = false,
  title,
  click,
  href,
  
}) => {
  const size = useWindowSize();
  const height = size.height;
  const heightSection = height / 1.2;

  return (
    <div
      style={{ height: heightSection }}
      className={`flex mt-6 bg-white p-4 flex-col lg:flex-row ${
        imagenIzquierda && "lg:flex-row-reverse"
      } items-center`}
    >
      <div className="flex-1  justify-center items-center flex ">
        <div className=" ">
          <Image
            height={1000}
            width={800}
            src={imagePath}
            alt="Imagen mediana"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="">
          {click && (
            <h1 className="font-bold font-bebas text-center text-black text-4xl lg:text-6xl mt-16">
              {title}
            </h1>
          )}
        </div>
        <div className="mt-4 bg bg-white flex justify-center items-center p-4">
          {click && (
            <p className="text-xl text-black justify-normal text-justify tracking-tight bg-white font-inter">
              {text}
            </p>
          )}
        </div>
        {(click && (
  <div className=" justify-center items-center cursor-pointer group relative flex bg-black font-semibold uppercase leading-4 tracking-widest transition-all duration-300 ease-in-out md:py-[21px]  sm:mx-56 md:px-[30px] mt-6 md:mt-11 p-6">
  
    <Link   href={href}>
      <span className=" relative transition-colors duration-300 ease-in-out text-white group-hover:text-pink-600">
        {click}
        <svg
          className="ml-3 -mt-[4px] inline fill-current !align-middle transition-all duration-300 ease-in-out group-hover:translate-x-2 md:ml-4"
          width="10"
          height="15"
          viewBox="0 0 10 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.656831 1.84292L6.31369 7.49978L0.656831 13.1566L2.07104 14.5708L7.7279 8.91399L9.14211 7.49978L7.7279 6.08556L2.07104 0.428711L0.656831 1.84292Z"
          ></path>
        </svg>
      </span>
    </Link>
  </div>

))}

      </div>
    </div>
  );
};

export default HomeSection;
