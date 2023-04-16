import Image from "next/image";

const HomeSection = ({ text, imagePath, imagenIzquierda = false,title, click, }) => {
  return (
    <div
      className={`flex mt-6 bg-black p-4 flex-col lg:flex-row ${imagenIzquierda && "lg:flex-row-reverse" }`} >
      <div className="flex-1 bg-black justify-center items-center flex">
        <Image height={700} width={700} src={imagePath} alt="Imagen mediana" />
      </div>
      <div className="flex-1 bg bg-black flex justify-center items-center p-4">
        <p className="text-2xl tex bg-white">{text}</p>
      </div>
      <div className="flex justify-items-center">
        <h1 className=" font-bold  text-white text-2xl">{title}</h1>
      </div>
      <div className=" bg-blue-700">
        <button>{click} </button>
      </div>
    </div>
  );
};

export default HomeSection;
