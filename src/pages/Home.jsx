import logements from "../data/logements.json"; //Les données proviennent d’un fichier JSON local qui contient les informations des logements
import Card from "../components/Card";
import "./Home.css";
import Banner from "../components/Banner";
import bannerBack from "../assets/Background.png";
import bannerFront from "../assets/back.png";

function Home() {
  return (
    <div className="home">
      <Banner
        image1={bannerBack}
        image2={bannerFront}
        title="Chez vous, partout et ailleurs"
      />

      <div className="card-container">
        {logements.map(
          (
            logement, //parcourir la liste des logements et afficher une carte pour chaque logement
          ) => (
            <Card key={logement.id} logement={logement} /> //Le composant Card reçoit les données de chaque logement en tant que prop et les utilise pour afficher les informations du logement dans une carte
          ),
        )}
        //
      </div>
    </div>
  );
}

export default Home;
