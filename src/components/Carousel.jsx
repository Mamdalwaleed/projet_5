import { useState } from "react";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1,
    );
  };

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt="Logement" />

      {pictures.length > 1 && (
        <>
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
          <p>
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
