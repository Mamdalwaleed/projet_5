import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
