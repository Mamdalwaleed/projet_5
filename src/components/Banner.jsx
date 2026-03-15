import "./Banner.css";

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner-img" />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
