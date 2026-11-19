import greciaImg from "../assets/greciaa.webp";
import spagnaImg from "../assets/spagnaa.jpg";
import italiaImg from "../assets/italia.jpg";
import turchiaImg from "../assets/turchia.jpg";
import croaziaImg from "../assets/croaziaa.jpg";
import Type from "../destinazComponents/Type";
import Guests from "../destinazComponents/Guests";
import Dates from "../destinazComponents/Dates";
import {
  FaMapMarkerAlt,
  FaUmbrellaBeach,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import { useState } from "react";
export default function Destinazioni() {
  const destinations = [
    {
      id: 1,
      name: "Mediterraneo",
      countries: [
        {
          name: "Grecia",
          cities: ["Atene", "Mykonos", "Rodi", "Santorini"],
        },
        {
          name: "Spagna",
          cities: [
            "Barcellona",
            "Madrid",
            "Valencia",
            "Maiorca",
            "Ibiza",
            "Minorca",
          ],
        },
        {
          name: "Italia",
          cities: [
            "Roma",
            "Venezia",
            "Milano",
            "Napoli",
            "Palermo",
            "Sardegna",
            "Costiera Amalfitana",
          ],
        },
        {
          name: "Croazia",
          cities: ["Dubrovnik", "Spalato", "Zara", "Hvar"],
        },
        {
          name: "Turchia",
          cities: ["Istanbul", "Antalya", "Bodrum", "Izmir"],
        },
      ],
    },
    {
      id: 2,
      name: "Caraibi",
      countries: [
        {
          name: "Repubblica Dominicana",
          cities: ["Punta Cana", "Bayahibe"],
        },
        {
          name: "Cuba",
          cities: ["L'Avana", "Varadero", "Trinidad", "Cayo Coco"],
        },
        {
          name: "Giamaica",
          cities: ["Montego Bay", "Negril", "Ocho Rios"],
        },
        {
          name: "Bahamas",
          cities: ["Nassau", "Paradise Island", "Freeport"],
        },
      ],
    },
    {
      id: 3,
      name: "Nord Europa",
      countries: [
        {
          name: "Norvegia",
          cities: ["Oslo", "Bergen", "Tromsø", "Geiranger"],
        },
        {
          name: "Islanda",
          cities: ["Reykjavik", "Akureyri", "Vik"],
        },
      ],
    },
  ];

  // --------------- STATI ------------------
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [activeSection, setActiveSection] = useState("destination");

  const [selectedAirport, setSelectedAirport] = useState(null);

  // ----------------- FUNZIONI ---------------------

  const handleAreaChange = (area) => {
    setSelectedArea(area);
    setSelectedCountry(null);
    setSelectedCity(null);
    setSelectedType(null);

    setAdults(2);
    setChildren(0);

    setDepartureDate("");
    setReturnDate("");
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCity(null);
    setSelectedType(null);
    setDepartureDate("");
    setReturnDate("");
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedType(null);
    setDepartureDate("");
    setReturnDate("");
  };
  // ------------- LOGICA -----------------
  const canSelectType = selectedCity !== null;

  const canSelectGuests = selectedType !== null;

  const canSelectDates = selectedType !== null && adults > 0;

  const canConfirm =
    selectedCity !== null &&
    selectedType !== null &&
    adults > 0 &&
    departureDate !== "" &&
    returnDate !== "";

  return (
    <div className="p-3">
      <h3 className="mb-4 mt-2 text-3xl text-[#359FA0]">I nostri viaggi</h3>
      {/* BARRA */}
      <div className="w-full max-w-6xl mx-auto mb-8 bg-[#FFF0C5] rounded-xl shadow-lg flex flex-wrap md:flex-nowrap overflow-hidden">
        {/* Destinazione */}
        <button
          onClick={() => setActiveSection("destination")}
          className="flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition cursor-pointer"
        >
          <FaMapMarkerAlt className="text-2xl text-[#FF8C52]" />
          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500">Destinazione</span>
            <span className="font-semibold text-[#359FA0]">
              Dove vuoi andare?
            </span>
          </div>
        </button>

        <div className="w-px bg-gray-300 hidden md:block"></div>

        {/* Tipologia */}
        <button
          disabled={!canSelectType}
          onClick={() => setActiveSection("type")}
          className={`flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition ${canSelectType ? "cursor-pointer" : "opacity-50 cursor-not-allowed "}`}
        >
          <FaUmbrellaBeach className="text-2xl text-[#FF8C52]" />
          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500">Tipologia</span>
            <span className="font-semibold text-[#359FA0]">
              Volo e soggiorno..
            </span>
          </div>
        </button>

        <div className="w-px bg-gray-300 hidden md:block"></div>

        {/* Ospiti */}
        <button
          disabled={!canSelectGuests}
          onClick={() => setActiveSection("guests")}
          className={`flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition ${canSelectGuests ? "cursor-pointer" : "opacity-50 cursor-not-allowed "}`}
        >
          <FaUsers className="text-2xl text-[#FF8C52]" />
          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500">Ospiti</span>
            <span className="font-semibold text-[#359FA0]">2 adulti</span>
          </div>
        </button>

        <div className="w-px bg-gray-300 hidden md:block"></div>

        {/* Data */}
        <button
          disabled={!canSelectDates}
          onClick={() => setActiveSection("dates")}
          className={`flex items-center gap-3 px-6 py-4 flex-1 hover:bg-[#ffe8a0] transition ${canSelectDates ? "cursor-pointer" : "opacity-50 cursor-not-allowed "}`}
        >
          <FaCalendarAlt className="text-2xl text-[#FF8C52]" />
          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500">Partenza e ritorno</span>
            <span className="font-semibold text-[#359FA0]">Seleziona date</span>
          </div>
        </button>

        {/* Bottone cerca */}
        <button
          disabled={!canConfirm}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 transition opacity-50"
        >
          Conferma
        </button>
      </div>

      {/* menu sinistra */}
      {activeSection === "destination" && (
        <section className="grid grid-cols-[250px_1fr_350px] gap-8 bg-[#FFF0C5] p-3">
          <aside className="flex flex-col gap-2">
            {destinations.map((area) => (
              <button
                key={area.id}
                onClick={() => handleAreaChange(area)}
                className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-200
                          ${
                            selectedArea?.id === area.id
                              ? "bg-[#FF8C52] text-white shadow-md"
                              : "bg-[#8AD6D1] text-[#359FA0] hover:bg-[#359FA0] hover:text-white"
                          }`}
              >
                {area.name}
              </button>
            ))}
          </aside>
          {/* menu centrale */}
          <div className="grid grid-cols-2 gap-6">
            {selectedArea?.countries.map((country) => (
              <article key={country.name}>
                <button
                  onClick={() => handleCountryChange(country)}
                  className={`w-full text-left px-3 py-2 rounded-md font-semibold transition-all mb-1
                          ${
                            selectedCountry?.name === country.name
                              ? "bg-[#FF8C52] text-white"
                              : "bg-[#8AD6D1] text-[#359FA0] hover:bg-[#359FA0] hover:text-white"
                          }`}
                >
                  {country.name}
                </button>

                <ul>
                  {/* nel primo caso country.name sarà spagna nella seconda iterazione grecia */}
                  {selectedCountry?.name === country.name &&
                    selectedCountry.cities.map((city) => (
                      <li key={city}>
                        <button
                          onClick={() => handleCityChange(city)}
                          className={`hover:text-orange-500 ${
                            selectedCity === city
                              ? "font-bold text-orange-500 after:content-['✔️']"
                              : ""
                          }`}
                        >
                          {city}
                        </button>
                      </li>
                    ))}
                </ul>
              </article>
            ))}
            {selectedCity && (
              <button
                onClick={() => setActiveSection("type")}
                className="bg-[#FF8C52] text-gray-600 hover:bg-[#e07c4a] active:bg-[#8AD6D1] font-bold h-12 w-32 justify-self-end col-start-2 rounded-lg"
              >
                Avanti ➡️
              </button>
            )}
          </div>
          {/* COLONNA DESTRA */}
          <div className="flex gap-2">
            <div className="h-80 w-80 rounded-xl mr-10">
              {selectedCountry?.name === "Grecia" && (
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={greciaImg}
                ></img>
              )}
              {selectedCountry?.name === "Spagna" && (
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={spagnaImg}
                ></img>
              )}
              {selectedCountry?.name === "Italia" && (
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={italiaImg}
                ></img>
              )}
              {selectedCountry?.name === "Turchia" && (
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={turchiaImg}
                ></img>
              )}
              {selectedCountry?.name === "Croazia" && (
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={croaziaImg}
                ></img>
              )}
            </div>
          </div>
        </section>
      )}
      <Type
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedAirport={selectedAirport}
        setSelectedAirport={setSelectedAirport}
      ></Type>
      <Guests
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
      ></Guests>
      <Dates
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
      ></Dates>
    </div>
  );
}
