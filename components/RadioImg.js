import React from "react";

const RadioImg = () => {
  return (
    <div>
      <div className=" bg-white ">
        <h2 className="mx-auto text-3xl font-bold text-black md:text-5xl md:leading-[1.25] max-w-[1200px] font-bebas text-center">
          Nuestros Beneficios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 container mx-auto flex-center my-10">
  <div className=" border border-slate-950 flex flex-col items-center">
    <img className="w-250 h-250" src="/Img/talentohumano.png" alt="" />
    <h3 className="mb-2 text-2xl font-bold md:text-3xl text-black">
      Cliente
    </h3>
    <p className="grow font-medium text-black text-lg leading-6">
      “Talento humano excepcional"
    </p>
  </div>

  <div className=" border border-slate-950 flex flex-col items-center">
    <img className="w-250 h-250" src="/Img/marketing360.png" alt="" />
    <h3 className="mb-2 text-2xl font-bold md:text-3xl text-black">
      Marketing 360
    </h3>
    <p className="grow font-medium text-black text-lg leading-6">
      “Explicar algo”
    </p>
  </div>

  <div className=" border border-slate-950 flex flex-col items-center">
    <img className="w-250 h-250" src="/Img/emo.png" alt="" />
    <h3 className="mb-2 text-2xl font-bold md:text-3xl text-black">
      Conectamos emociones
    </h3>
    <p className="grow font-medium text-black text-lg leading-6">
      “texto aca”
    </p>
  </div>
  <div className=" border border-slate-950  flex flex-col items-center">
    <img className="w-250 h-250" src="/Img/capacitaciones.png" alt="" />
    <h3 className="mb-2 text-2xl font-bold md:text-3xl text-center text-black">
                  Mentoring y capacitaciones
    </h3>
    <p className="grow font-medium text-black text-lg leading-6">
      “Talento humano excepcional"
    </p>
  </div>

  
</div>

    </div>
    </div>
  );
};

export default RadioImg;
