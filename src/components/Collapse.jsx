import { useState } from "react"; // useState est un hook de React qui permet de gérer l’état local d’un composant,ici on l’utilise pour suivre si le contenu du collapse est ouvert ou fermé
import "./Collapse.scss";

function Collapse({ title, children }) {
  //le composant Collapse reçoit deux props : title qui est le titre du collapse à afficher, et children qui représente le contenu à afficher lorsque le collapse est ouvert
  const [isOpen, setIsOpen] = useState(false); // initialise isOpen à false, ce qui signifie que le collapse est fermé par défaut

  const toggleCollapse = () => {
    //fonction pour basculer l’état du collapse entre ouvert et fermé,elle met à jour isOpen en inversant sa valeur actuelle (true devient false et vice versa)
    setIsOpen(!isOpen); //Lorsque l’utilisateur clique sur l’en-tête du collapse, cette fonction est appelée pour basculer l’état du collapse entre ouvert et fermé
  }; //fermé → ouvert ouvert → fermé

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>⌃</span>
      </div>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
