import Image from "next/image";

const WinPage = () => {
  return (
    <div>
      <section className="relative overflow-hidden p-2 py-10 md:py-[60px]">
        <div className="container relative flex flex-wrap items-center gap-8 xl:flex-nowrap xl:gap-32">
          <div className="relative z-10 max-w-[650px] flex-1 transition-all duration-1000 ease-in-out translate-x-0 opacity-100">
            <h1 className="mb-2 text-3xl font-bold text-[#000] md:mb-7 md:text-5xl md:leading-[1.25]">
            ¡Es así que nace MKT Studio!
            </h1>
            <p className="mb-5 text-xl font-medium uppercase leading-tight tracking-wider text-[#000] md:mb-8">
            MKT Studio es una agencia de marketing 360, que busca revolucionar el mundo del marketing, conectando con las emociones de sus partners y a su vez ayudar a estos a que conecten con las emociones de sus clientes, generando una visión clara y disruptiva en el mercado.
            </p>
            <div className="h-[3px] w-24 bg-[#C61D23]"></div>
            <p className="mt-5 text-lg leading-6 text-[#1B1C1C] md:mt-8 md:text-xl md:leading-8">
            Entendemos y tenemos claro que las agencias de hoy en día confunden el verdadero Marketing con publicidad. Nosotros queremos llevar el MKT otro nivel, conectando con las emociones de nuestros clientes y ellos a su vez con las emociones de su público objetivo.
            </p>
            <div className="cursor-pointer group relative inline-block py-3 px-5 text-base font-semibold uppercase leading-4tracking-widest transition-all duration-300 ease-in-out md:py-[21px] md:px-[30px] mt-6 md:mt-11">
              <div
                className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 transform border-[3px] 
            border-[#1B1C1C] bg-[#1B1C1C] transition-all duration-300 ease-in-out group-hover:w-[103%] group-hover:bg-transparent "
              ></div>
              <span className="relative transition-colors duration-300 ease-in-out text-white group-hover:text-[#1B1C1C] ">
               Hablanos{" "}
                <svg
                  className="ml-3 -mt-[4px] inline fill-current !align-middle transition-all  duration-300 ease-in-out group-hover:translate-x-2 md:ml-4"
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
            </div>
          </div>
          <div className="z-10 transition-all duration-1000 ease-in-out translate-y-0 opacity-100">
            <div
              className=""
             
            >
              <div className="max-width:500px;display:block mr-5">
                <img
                  className="max-width:100%;display:block;position:static "
                  alt=""
                  clipRule="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf8,%3Csvg%20height='554'%20width='500'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="!absolute bottom-16 w-[115%] transition-all duration-1000 ease-in-out md:right-0 sm:flex justify-center md:w-[inherit] xl:bottom-[inherit] xl:top-8 translate-x-0 opacity-100 mr-7 pr-16"
        
          
        >
          
            <Image
              className="object-fit: cover; opacity: 1;"
              width="776"
              height="438"
              data-main-image=""
              sizes="(min-width: 776px) 776px, 100vw"
             
              src="/Img/imgmkt.png"
              alt="Powder Red"
            />
         
        </div>
      </section>
    </div>
  );
};

export default WinPage;
