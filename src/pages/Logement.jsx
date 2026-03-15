import { useParams, Navigate } from "react-router-dom"; // useParams permet de récupérer les paramètres de l’URL,ici on récupère l’id du logement à afficher,Navigate est utilisé pour rediriger vers une autre page si le logement n’est pas trouvé
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Taglist from "../components/Taglist";
import "./Logement.css";

function Logement() {
  const { id } = useParams(); // un hook de React Router qui permet d’accéder aux paramètres de l’URL,ici on récupère l’id du logement à afficher
  const logement = logements.find((item) => item.id === id); //recherche dans la liste des logements celui qui correspond à l’id récupéré,si aucun logement ne correspond,logement sera undefined

  if (!logement) {
    return <Navigate to="/error" replace />;
  }

  const rating = Number(logement.rating); //convertit la note du logement en nombre pour pouvoir l’utiliser dans le composant de notation

  return (
    <div className="logement">
      {/* Carousel des images */}
      <Carousel pictures={logement.pictures} />{" "}
      {/*le composant Carousel reçoit en prop le tableau de photos du logement et les affiche dans un carousel d’images */}
      {/* Header avec infos logement + propriétaire */}
      <div className="logement-header">
        {/* Infos logement */}
        <div className="logement-info">
          <h1 className="titre">{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <Taglist tags={logement.tags} />{" "}
          {/*le composant TagList reçoit en prop le tableau de tags du logement et les affiche sous forme d’étiquettes dans la section des informations du logement.*/}
        </div>

        {/* Propriétaire + rating */}
        <div className="logement-host">
          <p className="host-name">{logement.host.name}</p>{" "}
          {/*Affiche le nom du propriétaire du logement dans la section des informations du propriétaire.*/}
          <div className="host-picture-wrapper">
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index}>{index < rating ? "★" : "☆"}</span> //Affiche les étoiles de notation en fonction de la note du logement,les étoiles pleines (★) sont affichées pour les indices inférieurs à la note,et les étoiles vides (☆) sont affichées pour les indices supérieurs ou égaux à la note
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Collapses */}
      <div className="logement-collapses">
        <Collapse title="Description">{logement.description}</Collapse>{" "}
        {/*le composant Collapse reçoit en prop le titre "Description" et le contenu de la description du logement,il affiche la description dans une section rétractable sous le titre "Description".*/}
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map(
              (
                item,
                index, //le composant Collapse reçoit en prop le titre "Équipements" et une liste d’équipements du logement,il affiche la liste des équipements dans une section rétractable sous le titre "Équipements". Chaque équipement est affiché dans un élément de liste <li>.
              ) => (
                <li key={index}>{item}</li>
              ),
            )}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
