import logements from "../data/logements.json";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="card-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
