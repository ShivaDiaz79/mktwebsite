
import HomeSection from "@/components/HomeSection";

import Layout from "@/components/Layout";


const Home = () => {
  return (
    
      <Layout>

         <video className= 'fleex flex-auto w-full' autoPlay muted loop>
            <source src="/Img/mktprueba.mp4" type="video/mp4" />
          </video>
      <HomeSection imagePath={'/Img/marketing-emocional.jpg'} text={'Hola'}/>    
      <HomeSection imagenIzquierda={true} imagePath={'/Img/marketing-emocional.jpg'} text={'Hola 57575765'}/>   
      <HomeSection imagePath={'/Img/marketing-emocional.jpg'} text={'Hola'}/>    
      <HomeSection imagenIzquierda={true} imagePath={'/Img/marketing-emocional.jpg'} text={'Hola 57575765'}/> 

    </Layout>
    
  
  )
}

export default Home;


     