import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  // 🔥 Redirection si id invalide
  if (!logement) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host">
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>

          <div className="rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <span key={index}>
                  {index < Number(logement.rating) ? "★" : "☆"}
                </span>
              ))}
          </div>
        </div>
      </div>

      <div className="collapse-container">
        <Collapse title="Description" content={logement.description} />

        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
