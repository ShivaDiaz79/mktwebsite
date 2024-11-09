import Image from "next/image";

const RectanGule = () => {
  return (
    <div>
      <section className="py-10 lg:py-20 flex justify-center bg-light-gray">
        <div className="relative z-10 flex flex-col container px-8 lg:px-52">
          <div className=" bg-gray-900 flex flex-col w-full shadow-button rounded-lg py-8 px-8 justify-center items-center mb-6">
            <h2 className="text-2xl sm:text-4xl text-white lg:text-2r font-bebas font-bold mb-2 text-center">
              Nos enfocamos en una estrategia win-win
            </h2>
            <p className="max-w-full text-white lg:max-w-1/2 font-inter text-sm lg:text-base font-normal text-center">
              Donde empezamos de adentro hacia afuera, nuestros empleados,
              nuestra compañía y nuestros partners son los tres pilares
              fundamentales para generar los mejores resultados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RectanGule;
