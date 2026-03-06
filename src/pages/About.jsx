import Collapse from "../components/Collapse";
import "./About.css";

function About() {
  return (
    <div>
      <div className="banners"></div>

      <div className="about-collapses">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale.
        </Collapse>

        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa.
        </Collapse>
        <Collapse title="service">
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
