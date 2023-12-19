import Layout from "@/components/Layout";
import FondoMkt from "@/components/FondoMkt";
import MenuFlotante from "@/components/MenuFlotante";
import HomeSection from "@/components/HomeSection";

const index = () => {
  return (
        <Layout>
           <FondoMkt title= "Conoce nuestro talento humano"
        imagenFondo="/Img/mktfondo3.png"
        
        parrafo=" Nuestro equipo conformado por grandes talentos,comparte los valores y los ideales de la empresa, nos enfocamos en crear un ambiente de superación personal y laboral en todo momento."
        imagenCentro="/Img/familia.jpg"
        
      
      />
 


   
    </Layout>
  )
}

export default index