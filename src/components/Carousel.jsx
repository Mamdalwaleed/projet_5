import { useState } from "react";
import "./Carousel.css";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt="logement"
        className="carousel-image"
      />

      {pictures.length > 1 && (
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
