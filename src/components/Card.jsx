import { Link } from "react-router-dom";
import "./Card.css";

function Card({ logement }) {
  //le composant reçoit l’objet logement envoyé par Home
  return (
    <Link to={`/logement/${logement.id}`} className="card-link">
      {/*Cela crée une URL dynamique,l’URL change,la page Logement s’affiche*/}
      <div className="card">
        <img src={logement.cover} alt={logement.title} className="card-image" />
        <div className="card-overlay">
          <h2>{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
