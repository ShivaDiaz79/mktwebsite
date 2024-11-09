import HomeSection from "@/components/HomeSection";
import WinPage from "@/components/WinPage";

import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>


      
      <video className="fleex flex-auto w-full" autoPlay muted loop>
        <source src="/Img/mktprueba.mp4" type="video/mp4" />
      </video>
      <WinPage/>

      <HomeSection
        imagePath={"/Img/procesosempresariales.jpg"}
        title={"Conexiones extraordinarias "}
        text={
          "Queremos llevar  el marketing de tu negocio al siguiente nível  mediante estrategias efectivas que toquen las emociones más profundas del público al que se dirige, generando clientes potenciales que se convertirán en locos amantes de tu marca."
        }
        click={"Tengamos una llamada"}
        href={'/'}
      />

      <HomeSection
        imagenIzquierda={true}
        imagePath={"/Img/redes.jpg"}
        title={" Un equipo de 10"}
        text={
          "Nuestro equipo de talento humano está conformado por profesionales, cada uno experto en su área, listos para trabajar en conjunto y hacer de tu marca la mejor."
        }
        click={"Conoce al equipo"}
        href={'/talentohumano'}
      />

      <HomeSection
        imagePath={"/Img/marketing-emocional.jpg"}
        title={"Trabajamos las Emociones "}
        text={
          "Nuestro principal objetivo es  generar una conexión emocional entre marca y consumidor. A través del marketing de emociones tu negocio se diferenciara de la competencia y logrará crear una comunidad de leales consumidores y amantes de tu marca."
        }
        click={"Quiero Enamorarme"}
        href={'/'}
      />
      

    </Layout>
  );
};

export default Home;
