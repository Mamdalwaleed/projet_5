import React from "react"; //React est la bibliothèque qui permet de créer l’interface du site
import ReactDOM from "react-dom/client"; //ReactDOM sert à afficher React dans le navigateur
import { BrowserRouter } from "react-router-dom"; //permet de gérer la navigation entre les page
import App from "./App.jsx"; //est le composant principal du site

ReactDOM.createRoot(document.getElementById("root")).render(
  //React cherche dans le fichier index.html l’élément avec l’id root et y affiche le composant App
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

//C’est un outil de développement,détecter les erreurs et signaler les mauvaises pratiques React
// Il active React Router pour toute l’application,Cela permet à App.jsx de créer des routes
