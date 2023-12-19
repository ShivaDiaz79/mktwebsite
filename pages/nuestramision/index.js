import Layout from "@/components/Layout";
import FondoMkt from "@/components/FondoMkt";
import Leters from "@/components/Leters";
import RectanGule from "@/components/RectanGule";
import ColumImg from "@/components/ColumImg";

const index = () => {
  return (
    <Layout>
      <FondoMkt
        imagenFondo="/Img/mktfondo3.png"
        title="NO SOMOS PARA TODOS Y MENOS COMO TODOS."
      />
     
      <Leters title='QUEREMOS GENERAR UN IMPACTO CON LAS MARCAS QUE TRABAJAMOS Y CON SUS CLIENTES.' text2='El mundo de los negocios y el desarrollo de marcas disruptivas es lo que más nos apasiona. Es por eso que en MKT STUDIO buscamos conectar con nuestros clientes desde la médula, generando un alto valor y resultados increíbles mediante estrategias win-win.' text='El crecimiento de nuestros partners es igual de importante y significativo que nuestra pasión por el marketing.  '/>
       
       <ColumImg/>
       <RectanGule/>
    </Layout>
  );
};

export default index;
