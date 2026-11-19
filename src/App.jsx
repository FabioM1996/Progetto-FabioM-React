import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinazioni from "./pages/Destinazioni";
import Contatti from "./pages/Contatti";
import Mappa from "./pages/Mappa";
import Login from "./pages/Login";
import Summary from "./destinazComponents/Summary";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    {/* eventualmente usare layout */}
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinazioni" element={<Destinazioni />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/agenzie" element={<Mappa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
