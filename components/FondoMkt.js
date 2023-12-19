import Image from "next/image";

const FondoMkt = ({ imagenFondo, title, click, imagenCentro, parrafo }) => {

  console.log(click,'eesto es original' );
  console.log(Boolean(click),'eesto es original' );





  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${imagenFondo})`, height: "800px" }}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
       { imagenCentro && <div className="px-6">
          <Image className="  lg:w-full lg:h-96 sm:w-full sm:h-60 "   src={imagenCentro} alt="Imagen centrada" width={800} height={700} />
        </div>}
        <h1 className=" text-4xl sm:text-6xl text-white font-bold  font-bebas text-center mt-5">{title}</h1>
        <p className="text-white  md:text-lg xl:text-3xl  font-inter font-bold text-justify  px-6 xl:px-60 mt-5">{parrafo}</p>
      { click && <button className="flex justify-center bg-gray-900 hover:bg-slate-400 text-white text-center font-bebas  p-6 mt-24 gap-8 ">
          {click}
        </button>}
      </div>
    </div>
  );
};

export default FondoMkt;
