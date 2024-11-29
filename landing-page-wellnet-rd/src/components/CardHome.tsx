import cardImage from "../resoucers/img/velocidad-internet-2.png";
import '../styles/CardHome.css';

//TODO: DEBO CREAR UNA INTERFACE O TYPO PARA ESTE PARAMETRO QUE RECIBE
function CardHome(planInfo: any) {
  return (
    <div className="product-card" id={planInfo.id}>
        <img src={cardImage} alt="Product Image" className="product-image"/>
        <div className="product-info">
            <h2 className="product-title">{planInfo.planInfo.nombrePlan}</h2>
            <p className="product-description">{planInfo.planInfo.descripcion}</p>
            <ul className="product-features">
                <li id={planInfo.id}>
                  <p>Descarga</p>
                  <p>{planInfo.planInfo.descarga}</p>
                </li>
                <li id={`${planInfo.id}`}>
                  <p>Subida</p>
                  <p>{planInfo.planInfo.subida}</p>
                </li>                
            </ul>
            <p className="product-price">{planInfo.planInfo.precio}</p>
            <button className="buy-button">Solicitar</button>
        </div>
    </div>
  );
}

export default CardHome;