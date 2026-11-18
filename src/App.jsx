import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinazioni from "./pages/Destinazioni";
import Contatti from "./pages/Contatti";
import Mappa from "./pages/Mappa";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinazioni" element={<Destinazioni />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/agenzie" element={<Mappa />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
