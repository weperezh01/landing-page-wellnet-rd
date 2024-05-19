import Header from "../components/Header";
import Banner from "../components/Banner";
import HomeServices from "../components/HomeServices";
import "../styles/Home.css";
import cardImage from "../resoucers/img/img_avatar.png";

function Home() {
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
        <div id="" className="main-service-item">
          {/* Card */}
          <div className="card">
            <img src={cardImage} alt="Avatar" width={100} />
            <div className="container">
              <h4>
                <b>Servicio uno</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          {/* Card */}

          {/* Card */}
          <div className="item">
            <img src={cardImage} alt="Avatar" width={100} />
            <div className="container">
              <h4>
                <b>Servicio</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          {/* Card */}

          {/* Card */}
          <div className="item">
            <img src={cardImage} alt="Avatar" width={100} />
            <div className="container">
              <h4>
                <b>Servico</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          {/* Card */}
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
      <section
        id="testimonio-clientes-section"
        className="testimonio-clientes-setion"
      >
        <h1>Testimonios de algunos de nuestros clientes</h1>
        <div>
          <div className="testimonio">
            <h4>Nombre del cliente</h4>
            <p>Comentario que debe hacer el cliente sobre los productos</p>
          </div>

          <div className="testimonio">
            <h4>Nombre del cliente</h4>
            <p>Comentario que debe hacer el cliente sobre los productos</p>
          </div>

          <div className="testimonio">
            <h4>Nombre del cliente</h4>
            <p>Comentario que debe hacer el cliente sobre los productos</p>
          </div>
        </div>
      </section>
      {/* Contenido del testimonio de los clientes */}

      {/* Pie de pagina */}
      <section className="footer">
        <div className="footer-block">
          <h1>Esto es el pie de pagina</h1>
        </div>
        <div className="footer-block">Algun otro contenido debe ir aquí</div>
        <div className="footer-block">
          Aqui debe ir la parte de los derechos reservados
        </div>
      </section>
      {/* Pie de pagina */}
    </div>
  );
}

export default Home;
