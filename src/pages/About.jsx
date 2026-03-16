import Collapse from "../components/Collapse";
import "./About.scss";

function About() {
  return (
    <div className="about">
      {/* Bannière fixe via CSS */}
      <div className="banner-about">
        <h1>À propos de nous</h1>
      </div>

      {/* Collapses */}
      <div className="about-collapses">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale.
        </Collapse>
        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa.
        </Collapse>
        <Collapse title="Service">
          Les annonces postées sur Kasa garantissent une fiabilité totale.
        </Collapse>
        <Collapse title="Sécurité">
          La bienveillance fait partie des valeurs fondatrices de Kasa.
        </Collapse>
      </div>
    </div>
  );
}

export default About;
