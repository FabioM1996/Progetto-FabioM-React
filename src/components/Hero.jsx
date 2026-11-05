import {
  FaMapMarkerAlt,
  FaUmbrellaBeach,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

import heroImg from "../assets/queensland-australia-hero2.webp";
function Hero() {
  return (
    <>
      <section
        className="h-125 flex flex-col items-center mx-2 justify-between"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-[#FF8C52] text-center bg-[#fff0c57f] text-shadow-[#359FA0] text-shadow-sm p-1 mt-1">
          <h1>Esperienze uniche in australia e oltre!</h1>
          <p></p>
        </div>
        {/* BARRA */}
        <div className="w-full max-w-6xl mx-auto mb-10 bg-[#FFF0C5] rounded-xl shadow-lg flex flex-wrap md:flex-nowrap overflow-hidden">
          {/* Destinazione */}
          <button className="flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition cursor-pointer">
            <FaMapMarkerAlt className="text-2xl text-[#FF8C52]" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-500">Destinazione</span>
              <span className="font-semibold text-[#359FA0]">Dove vuoi andare?</span>
            </div>
          </button>

          <div className="w-px bg-gray-300 hidden md:block"></div>

          {/* Tipologia */}
          <button className="flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition cursor-pointer">
            <FaUmbrellaBeach className="text-2xl text-[#FF8C52]" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-500">Tipologia</span>
              <span className="font-semibold text-[#359FA0]">Villaggio, Tour...</span>
            </div>
          </button>

          <div className="w-px bg-gray-300 hidden md:block"></div>

          {/* Ospiti */}
          <button className="flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition cursor-pointer">
            <FaUsers className="text-2xl text-[#FF8C52]" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-500">Ospiti</span>
              <span className="font-semibold text-[#359FA0]">2 adulti</span>
            </div>
          </button>

          <div className="w-px bg-gray-300 hidden md:block"></div>

          {/* Data */}
          <button className="flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition cursor-pointer">
            <FaCalendarAlt className="text-2xl text-[#FF8C52]" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-500">Partenza e ritorno</span>
              <span className="font-semibold text-[#359FA0]">Seleziona date</span>
            </div>
          </button>

          {/* Bottone cerca */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 transition">
            Cerca
          </button>
        </div>
      </section>
    </>
  );
}
export default Hero;
