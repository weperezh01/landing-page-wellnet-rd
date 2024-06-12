import Header from "../components/Header";
import Banner from "../components/Banner";
import HomeServices from "../components/HomeServices";
import "../styles/Home.css";
import cardImage from "../resoucers/img/img_avatar.png";
import CardHome from '../components/CardHome';
import Testimonials from "../components/Testimonials";
import Footer from '../components/Footer';

// ======DATOS PROVISIONALES====

// type TestimonialType = {
//   testimonialsText: string
//   nameCustomer: string,
//   image: string
// }

type TestimonialType = {
  testimonialsText: string;
  nameCustomer: string;
  image: string;
}

//DATA PA PASAR A COMPONENTES Y MOSTRARLAS 
const testimonialsListValue: TestimonialType[] = [
  {
    testimonialsText: "El mejor servicio El mejor servicioEl mejor servicioEl mejor servicioEl mejor servicioEl mejor servicioEl mejor servicio",
    nameCustomer: "Fulano de Tal",
    image: "../resoucers/img/eourInstructors3.svg",
  },
  {
    testimonialsText: "El mejor servicio El mejor servicioEl mejor servicioEl mejor servicioEl mejor servicioEl mejor servicioEl mejor servicio",
    nameCustomer: "Fulano de Tal",
    image: "../resoucers/img/eourInstructors3.svg",
  },
  {
    testimonialsText: "El mejor servicio El mejor servicioEl mejor servicioEl mejor servicioEl mejor servicioEl mejor servicioEl mejor servicio",
    nameCustomer: "Fulano de Tal",
    image: "../resoucers/img/eourInstructors3.svg",
  },
];

const footerData = {
    aboutUs: {
      aboutUsText: "Somos una empresa dedicada a la instalacion de servicio de internet con el mejor resultado del pais."
    },
    quickLinks: [
      {
        titleLink: "Home",
        link: ""
      }
    ]
  }


//DATA PA PASAR A COMPONENTES Y MOSTRARLAS 

function Home() {
  const planList = [{
    id: 1,
    nombrePlan: "Plan Basico",
    descripcion: "El plan que se adapta a ti",
    descarga: 100,
    subida: 50,
    precio: 1600.00
  }, {
    id: 2,
    nombrePlan: "Plan Medio",
    descripcion: "El plan intemedio para ti",
    descarga: 150,
    subida: 80,
    precio: 1700.00
  }, {
    id: 3,
    nombrePlan: "Plan Premiun",
    descripcion: "El mejor plan que puedes encontrar",
    descarga: 200,
    subida: 100,
    precio: 1800.00
  }]

  const listaRenderizar = planList.map((plan) => {
    return <CardHome planInfo={plan} />
  })

  return (
    <div id="home_content" className="home_content">
      <Header />
      <Banner />
      {/* main services */}
      <section id="main-services" className="main-services">
        {/* <h3>Principales servicios</h3>
        <p>
          Aqui debe de ir un apartado rapido del cliente elegir de nuestros
          principales servicios
        </p> */}
        <div id="main-service-item" className="main-service-item">
          {/* Card implementando renderizado automatico*/}
          <>
            {
              listaRenderizar
            }
          </>
          {/* Card implementando renderizado automatico*/}
        </div>
      </section>
      {/* main services */}

      <section className="services" id="services">
        <HomeServices />
      </section>

      {/* Informacion sobre la empresa que se quiera ilustrar a primera impresion */}
      <section id="about-us" className="about-us">
        <div className="about-compamy">
          <h2>Nombre De la empresa</h2>
          <p className="description">
            Este es un parrafo donde se va a hablar de la empresa para conocer
            un poco mas de sus origenes, o cualquier informacion que se entienda
            que deba ir relacionada a este contenido
          </p>
        </div>
      </section>
      {/* Informacion sobre la empresa que se quiera ilustrar a primera impresion */}

      {/* Contenido del testimonio de los clientes */}
      <section id="testimonio-clientes-section" className="testimonio-clientes-setion">
        {/* Esta en revision, no me agrada aun */}
        <>{console.log(testimonialsListValue)}</>
        <Testimonials testimonialsList={testimonialsListValue} />
      </section>
      {/* Contenido del testimonio de los clientes */}

      {/* Pie de pagina */}
      <section className="footer">
        <Footer />
      </section>
      {/* Pie de pagina */}
    </div>
  );
}

export default Home;
