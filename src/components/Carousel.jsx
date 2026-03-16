import { useState } from "react"; // useState est un hook de React qui permet de gérer l’état local d’un composant,ici on l’utilise pour suivre l’index de l’image actuellement affichée dans le carousel
import "./Carousel.scss";

function Carousel({ pictures }) {
  //le composant reçoit une prop pictures qui est un tableau d’URL d’images à afficher dans le carousel
  const [currentIndex, setCurrentIndex] = useState(0); // initialise currentIndex à 0,ce qui signifie que la première image du tableau sera affichée au départ

  const nextSlide = () => {
    //fonction pour passer à l’image suivante,elle met à jour currentIndex en incrémentant sa valeur de 1,mais si currentIndex atteint la fin du tableau (pictures.length - 1),il revient à 0 pour créer un effet de boucle
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1)); //on passe à l'image suivante si on est à la dernière image → on revient à la première
  };

  const prevSlide = () => {
    //fonction pour passer à l’image précédente,elle met à jour currentIndex en décrémentant sa valeur de 1,mais si currentIndex est à 0,il revient à la fin du tableau (pictures.length - 1) pour créer un effet de boucle
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1)); //on passe à l'image précédente si on est à la première image → on revient à la dernière
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]} //affiche l’image actuelle en utilisant currentIndex pour accéder à l’URL de l’image dans le tableau pictures
        alt="logement"
        className="carousel-image"
      />

      {pictures.length > 1 && ( //si il y a plus d’une image,affiche les boutons de navigation et le compteur d’images
        <>
          <button className="carousel-btn left" onClick={prevSlide}>
            ‹
          </button>

          <button className="carousel-btn right" onClick={nextSlide}>
            ›
          </button>

          <div className="carousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
