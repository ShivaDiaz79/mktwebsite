import React from 'react';

const Leters =({ text, text2, title, }) => {
  return (
    <section className=" bg-white flex flex-col gap-y-5 pt-8 pb-5 md:flex-row md:gap-x-24 md:py-20">
      <header className="flex-1">
        <h2 className="text-4xl font-bebas font-bold text-[#000] md:text-[50px] md:leading-[1.25] pl-4">
        {title}
        </h2>
        <div className="mt-5 h-[3px] w-14 bg-pink-600 md:mt-6 md:w-24" />
      </header>
      <article className="flex-1">
        <p className=" text-2xl md:text-3xl font-inter md:leading-8 pl-4"> {text2}
       
          <br />
          {text}
          <br />
         
        </p>
      </article>
    </section>
  );
};

export default Leters;
