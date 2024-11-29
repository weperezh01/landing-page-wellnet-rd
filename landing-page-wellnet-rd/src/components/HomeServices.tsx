import cardImage from "../resoucers/img/img_avatar.png";
import "../styles/HomeServices.css";

export type HomeServiceType = {
  serviceName: string;
  serviceImage: string;
  serviceDescription: string;
};

interface HomeServiceProps {
  homeServiceList: HomeServiceType[];
}

/// ESTE COMPONENTE ES PARA MOSTRAR LOS SERVICIOS EN FORMA DE CARD EN LA PAGINA HOME

const HomeServices: React.FC<HomeServiceProps> = ({ homeServiceList }) => {
  return (
    <div className="services-content">
      {/* TODO: AGREGAR LOS SERVICIOS QUE OFRECE LA EMPRESA: VENTA DE EQUIPOS DE RED, CABLEADO DE RED, INSTALACION DE CAMARA  */}
      <h1 id="home-services-title">Otros servicios que ofrecemos</h1>
      <div id="services" className="services">
        {/* Card */}
        {homeServiceList.map((service) => {
          return (
            <div className="card">
              <div className="card-wrap">
              <img className="img-homeservice" src={service.serviceImage} alt="Avatar"/>
              <div className="service-description">
                <h4>
                  <b>{service.serviceName}</b>
                </h4>
                <p>{service.serviceDescription}</p>
              </div>
              </div>
            </div>
          );
        })}        
        {/* Card */}
      </div>
    </div>
  );
};

export default HomeServices;
