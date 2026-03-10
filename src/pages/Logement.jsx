import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Taglist from "../components/Taglist";
import "./Logement.css";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" replace />;
  }

  const rating = Number(logement.rating);

  return (
    <div className="logement">
      {/* Carousel des images */}
      <Carousel pictures={logement.pictures} />

      {/* Header avec infos logement + propriétaire */}
      <div className="logement-header">
        {/* Infos logement */}
        <div className="logement-info">
          <h1 className="titre">{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <Taglist tags={logement.tags} />
        </div>

        {/* Propriétaire + rating */}
        <div className="logement-host">
          <p className="host-name">{logement.host.name}</p>
          <div className="host-picture-wrapper">
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index}>{index < rating ? "★" : "☆"}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Collapses */}
      <div className="logement-collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
