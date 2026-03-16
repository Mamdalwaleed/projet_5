import { Link } from "react-router-dom"; //Link est un composant de React Router qui permet de créer des liens de navigation entre les pages du site,ici il est utilisé pour créer un lien vers la page Logement en utilisant l’id du logement
import "./Card.scss";

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
