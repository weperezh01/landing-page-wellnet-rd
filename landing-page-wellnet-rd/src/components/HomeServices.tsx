import cardImage from "../resoucers/img/img_avatar.png";
import "../styles/HomeServices.css";

/// ESTE COMPONENTE ES PARA MOSTRAR LOS SERVICIOS EN FORMA DE CARD EN LA PAGINA HOME

function HomeServices() {
  return (
    <div className="services-content">
      <div id="services" className="services">
        {/* Card */}
        <div className="card">
          <img src={cardImage} alt="Avatar" width={100} />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        {/* Card */}

        {/* Card */}
        <div className="card">
          <img src={cardImage} alt="Avatar" width={100} />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        {/* Card */}

        {/* Card */}
        <div className="card">
          <img src={cardImage} alt="Avatar" width={100} />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        {/* Card */}
      </div>
    </div>
  );
}

export default HomeServices;
