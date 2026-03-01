import { Link } from "react-router-dom";
import "./Card.css";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card-link">
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
