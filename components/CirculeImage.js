import Image from 'next/image';


const CirculeImage = () => {
  return (
    <div>
      <section className="relative bg-orange-400  py-16 md:py-[86px]">
        <div className="absolute top-0 left-0 h-4 w-full bg-gradient-to-l from-[#800507] to-[#DA2128]"></div>
        <div className="container">
          <div className="grid grid-cols-1 gap-y-9 text-center text-black md:grid-cols-5 md:gap-12 xl:gap-10">
            <div className="">
              <div className="flex items-center justify-center md:h-[84px]">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
              
                  <picture>
                    
                    <Image
                      placeholder="blurred"
                     
                      data-main-image=""
                      width={140}
                      height={24}
                      sizes="(min-width: 140px) 140px, 100vw"
                      decoding="async"
                      loading="lazy"
                      src="/Img/excelencia .png"
                      alt="5 stars"
                    />
                  </picture>

                
                </div>
              </div>
              <h3 className="mt-4 text-3xl font-bold md:mt-5 lg:text-[50px] lg:leading-[1.2]">
                100%
              </h3>
              <p className="mx-auto mt-1 max-w-50 text-lg font-medium leading-5 md:mt-3">
                EXCELENCIA
              </p>
            </div>
            
            <div>
              <div className="flex items-center justify-center md:h-[84px]">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                 
                  <picture>
               
                    <Image
                      placeholder="blurred"
                      width={98}
                      height={68}
                      data-main-image=""
                   
                      sizes="(min-width: 98px) 98px, 100vw"
                      decoding="async"
                      loading="lazy"
                      src="/Img/creatividad.png"
                     
                      alt="imagen mdiana"
                    />
                  </picture>

                  <noscript>
                    <picture>
                    
                      <Image
                        placeholder="blurred"
                        width={140}
                      height={68}
                        data-main-image=""
                        
                        sizes="(min-width: 98px) 98px, 100vw"
                        decoding="async"
                        loading="lazy"
                        src="/Img/logomkt.png"
                        alt="imagen mediana"
                      />
                    </picture>
                  </noscript>
                </div>
              </div>
              <h3 className="mt-4 text-3xl font-bold md:mt-5 lg:text-[50px] lg:leading-[1.2]">
                90+
              </h3>
              <p className="mx-auto mt-1 max-w-50 text-lg font-medium leading-5 md:mt-3">
                CREATIVIDAD
              </p>
            </div>


            
            <div className="">
              <div className="flex items-center justify-center md:h-[84px]">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div >
                    
                  </div>
                  
                  <picture>
                
                    <Image
                      placeholder="blurred"
                      width={105}
                      height={160}
                      data-main-image=""
                      sizes="(min-width: 105px) 105px, 100vw"
                      decoding="async"
                      loading="lazy"
                      src="/Img/colaboración.png"
                      
                      alt="imagen mediana"
                    />
                  </picture>
                  <noscript>
                    <picture>
                   
                     
                    </picture>
                  </noscript>
                </div>
              </div>
              <h3 className="mt-4 text-3xl font-bold md:mt-5 lg:text-[50px] lg:leading-[1.2]">
                160+
              </h3>
              <p className="mx-auto mt-1 max-w-50 text-lg font-medium leading-5 md:mt-3">
                COLABORACION
              </p>
            </div>
            <div>
                
              <div className="flex items-center justify-center md:h-[84px]">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div>
                   
                  </div>
                
                  <picture>
                  
                    <Image
                      placeholder="blurred"
                      width={100}
                      height={100}
                      data-main-image=""
                      
                      sizes="(min-width: 100px) 100px, 100vw"
                      decoding="async"
                      loading="lazy"
                      src="/Img/flexibilidad.png"
                      alt="Inc. 500 award"
                    />
                  </picture>
                  <noscript>
                    <picture>
                     
                    
                    </picture>
                  </noscript>
                </div>
              </div>
              <h3 className="mt-4 text-3xl font-bold md:mt-5 lg:text-[50px] lg:leading-[1.2]">
                #145
              </h3>
              <p className="mx-auto mt-1 max-w-50 text-lg font-medium leading-5 md:mt-3">
                FLEXIBILIDAD
              </p>
            </div>

            <div className="">
              <div className="flex items-center justify-center md:h-[84px]">
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div >
                   
                  </div>
                
                  <picture>
                  
                    <Image
                      placeholder="blurred"
                      width={84}
                      height={74}
                      data-main-image=""
                      
                      sizes="(min-width: 84px) 84px, 100vw"
                      decoding="async"
                      loading="lazy"
                      src="/Img/win-win.png"
                      
                      alt="imagen mediana"
                    />
                  </picture>
                  <noscript>
                    <picture>
                    
                    </picture>
                  </noscript>
                </div>
              </div>
              <h3 className="mt-4 text-3xl font-bold md:mt-5 lg:text-[50px] lg:leading-[1.2]">
                $450M+
              </h3>
              <p className="mx-auto mt-1 max-w-50 text-lg font-medium leading-5 md:mt-3">
                WIN-WIN
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CirculeImage;
