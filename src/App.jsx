import { Routes, Route } from "react-router-dom";//Ces deux éléments permettent de créer les pages du site,contient toutes les routes et définit une page
import Layout from "./components/Layout";//est un composant qui contient généralement,Donc le Header et Footer restent les mêmes sur toutes les pages
import Home from "./pages/Home";//Ces fichiers représentent les pages principales du site
import About from "./pages/About";//
import Error from "./pages/Error";//
import Logement from "./pages/Logement";//

function App() {  //C’est le composant principal du site,il contient les routes qui définissent les différentes pages du site
  return (
    <Routes>
      <Route path="/" element={<Layout />}>  
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
