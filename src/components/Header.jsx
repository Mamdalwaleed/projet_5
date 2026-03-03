import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
export default Header;
