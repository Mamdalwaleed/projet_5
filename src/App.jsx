import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./pages/Logement";

function App() {
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
