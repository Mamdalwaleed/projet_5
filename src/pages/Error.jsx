import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-text">
        Oups ! La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="error-link">
        Retourner à l’accueil
      </Link>
    </div>
  );
}

export default Error;
