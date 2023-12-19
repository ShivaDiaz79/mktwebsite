import Layout from "@/components/Layout";
import HomeSection from "@/components/HomeSection";
import FondoMkt from "@/components/FondoMkt";
import Leters from "@/components/Leters";
import CirculeImage from "@/components/CirculeImage";
import RadioImg from "@/components/RadioImg";
import CuaDrado from "@/components/CuaDrado";
import Button from "@/components/Button";
import Link from "next/link";


const index = () => {
  return (
    <Layout>
      <FondoMkt
        imagenFondo="/Img/mktfondo3.png"
        parrafo="Buscamos conectar con nuestros partners ofreciendo servicios WIN - WIN que les permita romper las barreras del mercado, siendo gestores del cambio y la innovación."
        imagenCentro="/Img/Marketingempresarial.jpg"
        click="Trabaja con nosotros"
      />
      <Leters title='Creemos en el poder de los negocios y en el empoderamiento de las personas' text=' Sacar lo mejor de las personas hace que los negocios lleguen a su máximo potencial, es por eso que en MKT studios nos centramos en empoderar a nuestros clientes y al equipo para lograr grandes resultados.'/>
      

    

      <HomeSection
        imagePath={"/Img/familia.jpg"}
        title={"CONOCE A NUESTRO EQUIPO "}
        text={
          "Nuestro equipo altamente capacitado en marketing digital y las diferentes áreas está listo para marcar la diferencia junto con tu empresa."
        }
        click={"Conoce al Team"}
        href={'/talentohumano'}
      />

{/* <HomeSection
        imagenIzquierda={true}
        imagePath={"/Img/familia.jpg"}
        title={" Mision "}
        text={
          " "}
       
      /> */}
     <HomeSection
        imagenIzquierda={true}
        imagePath={"/Img/redes.jpg"}
        title={" MISION"}
        text={
          " Revolucionar el mundo del marketing estratégico, con ideas disruptivas, creando la empresa donde todos quieren trabajar."
        }
        click={'ESCRIBIR ALGO'}
        href={'/talentohumano'}
      />
      <RadioImg />
    </Layout>
  );
};

export default index;
