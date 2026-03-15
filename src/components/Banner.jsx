import "./Banner.css";

function Banner({ image1, image2, title }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${image1}), url(${image2})`,
      }}
    >
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;
