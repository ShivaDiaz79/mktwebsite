import React from "react";

const CuaDrado = () => {
  return (
    <section className='py-2.5 bg-[#F8F8F8]'>
        <div className='container'>
            <div className= 'flex flex-col items-center py-2.5 md:flex-row md:py-[75px]'>
             <div data-gatsby-image-wrapper  className="gatsby-image-wrapper gatsby-image-wrapper-constrained">

             <img className="max-width:100%;display:block;position:static"
             alt=""
             role="presentation" 
             aria-hidden="true" 
             src="/Img/mktfondo3.png" />
             </div>
             <div className="opacity: 0; transition: opacity 500ms linear 0s; background-color: rgb(104, 88, 72); position: absolute; inset: 0px; object-fit: cover;"
             aria-hidden="true" 
             data-placeholder-image="" 
              >
             </div>
             <picture>
             <img className="object-fit: cover; opacity: 1; " 
             placeholder="blurred" width="550" height="400" data-main-image=""
              sizes="(min-width: 550px) 550px, 100vw"
            decoding="async" loading="lazy" 
            src="/Img/mktfondo2.png" srcset="/Img/mktfondo2" 
            alt="Disruptive Advertising employees at old office"/>
            </picture>
                
                </div>




        </div>







    </section>
  
  );
};

export default CuaDrado;
