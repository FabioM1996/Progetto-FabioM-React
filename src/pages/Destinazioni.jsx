import greciaImg from "../assets/greciaa.webp";
import spagnaImg from "../assets/spagnaa.jpg";
import italiaImg from "../assets/italia.jpg";
import turchiaImg from "../assets/turchia.jpg";
import croaziaImg from "../assets/croaziaa.jpg";
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
              <button className="bg-[#FF8C52] text-gray-600 hover:bg-[#e07c4a] active:bg-[#8AD6D1] font-bold h-12 w-32 justify-self-end col-start-2">
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

      {/* PANNELLO TYPE */}
      {activeSection === "type" && (
        <section className="grid grid-cols-[250px_1fr_350px] gap-8 bg-[#FFF0C5] p-3 min-h-[350px]">
          {/* COLONNA SINISTRA - TIPOLOGIA */}
          <aside className="flex flex-col gap-3">
            <h3 className="font-bold text-[#359FA0] text-lg mb-2">
              Come vuoi viaggiare?
            </h3>

            <button
              onClick={() => {
                setSelectedType("flight");
                setSelectedAirport(null);
              }}
              className={`w-full text-left px-4 py-4 rounded-lg font-bold transition-all duration-200
          ${
            selectedType === "flight"
              ? "bg-[#FF8C52] text-white shadow-md"
              : "bg-[#8AD6D1] text-[#359FA0] hover:bg-[#359FA0] hover:text-white"
          }`}
            >
              ✈️ Volo + Soggiorno
            </button>

            <button
              onClick={() => {
                setSelectedType("stay");
                setSelectedAirport(null);
              }}
              className={`w-full text-left px-4 py-4 rounded-lg font-bold transition-all duration-200
          ${
            selectedType === "stay"
              ? "bg-[#FF8C52] text-white shadow-md"
              : "bg-[#8AD6D1] text-[#359FA0] hover:bg-[#359FA0] hover:text-white"
          }`}
            >
              🏨 Solo soggiorno
            </button>
          </aside>

          {/* COLONNA CENTRALE - AEROPORTI */}
          <div className="flex flex-col gap-3">
            {selectedType === "flight" && (
              <>
                <h3 className="font-bold text-[#359FA0] text-lg mb-2">
                  Da quale aeroporto vuoi partire?
                </h3>

                {[
                  { id: "mxp", name: "Milano Malpensa", city: "Milano (MXP)" },
                  {
                    id: "bgy",
                    name: "Bergamo Orio al Serio",
                    city: "Bergamo (BGY)",
                  },
                  { id: "fco", name: "Roma Fiumicino", city: "Roma (FCO)" },
                  {
                    id: "blq",
                    name: "Bologna Guglielmo Marconi",
                    city: "Bologna (BLQ)",
                  },
                ].map((airport) => (
                  <button
                    key={airport.id}
                    onClick={() => setSelectedAirport(airport)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200
                ${
                  selectedAirport?.id === airport.id
                    ? "bg-[#FF8C52] text-white shadow-md"
                    : "bg-[#8AD6D1] text-[#359FA0] hover:bg-[#359FA0] hover:text-white"
                }`}
                  >
                    ✈️ {airport.name}
                    <span className="text-sm ml-2 opacity-80">
                      {airport.city}
                    </span>
                    {selectedAirport?.id === airport.id && " ✔️"}
                  </button>
                ))}
              </>
            )}

            {selectedType === "stay" && (
              <div className="flex flex-col justify-center items-center h-full text-center">
                <span className="text-5xl mb-3">🏨</span>
                <h3 className="font-bold text-[#359FA0] text-xl">
                  Perfetto, solo soggiorno!
                </h3>
                <p className="text-gray-600 mt-2">
                  Potrai organizzare autonomamente il tuo viaggio e scegliere
                  soltanto la struttura in cui soggiornare.
                </p>
              </div>
            )}

            {!selectedType && (
              <div className="flex flex-col justify-center items-center h-full text-center">
                <span className="text-5xl mb-3">🌍</span>
                <p className="text-gray-500 font-medium">
                  Seleziona una tipologia di viaggio per continuare.
                </p>
              </div>
            )}

            {/* PULSANTE AVANTI */}
            {selectedType && (
              <button
                disabled={selectedType === "flight" && !selectedAirport}
                className="bg-[#FF8C52] text-white hover:bg-[#e07c4a]
            disabled:bg-gray-300 disabled:cursor-not-allowed
            font-bold h-12 w-32 self-end mt-4 rounded-lg transition-all"
              >
                Avanti ➡️
              </button>
            )}
          </div>

          {/* COLONNA DESTRA - RIEPILOGO */}
          <div className="flex flex-col items-center justify-center bg-white/50 rounded-xl p-5">
            <h3 className="font-bold text-[#359FA0] text-lg mb-4">
              La tua vacanza
            </h3>

            {!selectedType ? (
              <p className="text-gray-500 text-center">
                Qui comparirà il riepilogo della tua scelta.
              </p>
            ) : (
              <>
                <span className="text-6xl mb-4">
                  {selectedType === "flight" ? "✈️🏨" : "🏨"}
                </span>

                <p className="font-bold text-gray-700 text-center">
                  {selectedType === "flight"
                    ? "Volo + Soggiorno"
                    : "Solo soggiorno"}
                </p>

                {selectedType === "flight" && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      Aeroporto di partenza
                    </p>
                    <p className="font-semibold text-[#359FA0] mt-1">
                      {selectedAirport
                        ? selectedAirport.name
                        : "Da selezionare"}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* PANNELLO OSPITI */}
      {activeSection === "guests" && (
        <section className="grid grid-cols-[250px_1fr_350px] gap-8 bg-[#FFF0C5] p-3 min-h-[350px]">
          {/* COLONNA SINISTRA - SELEZIONE OSPITI */}
          <aside className="flex flex-col gap-4">
            <h3 className="font-bold text-[#359FA0] text-lg mb-2">
              Chi parteciperà?
            </h3>

            {/* ADULTI */}
            <div className="bg-[#8AD6D1] rounded-lg p-4">
              <p className="font-bold text-[#359FA0] mb-1">Adulti</p>
              <p className="text-xs text-[#359FA0] mb-3">Dai 18 anni in su</p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  disabled={adults <= 1}
                  className="bg-white text-[#359FA0] font-bold w-9 h-9 rounded-full
              hover:bg-[#359FA0] hover:text-white disabled:opacity-40
              disabled:cursor-not-allowed transition-all"
                >
                  −
                </button>

                <span className="font-bold text-[#359FA0] text-xl">
                  {adults}
                </span>

                <button
                  onClick={() => setAdults(Math.min(9, adults + 1))}
                  disabled={adults >= 9}
                  className="bg-white text-[#359FA0] font-bold w-9 h-9 rounded-full
              hover:bg-[#359FA0] hover:text-white disabled:opacity-40
              disabled:cursor-not-allowed transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* BAMBINI */}
            <div className="bg-[#8AD6D1] rounded-lg p-4">
              <p className="font-bold text-[#359FA0] mb-1">Bambini</p>
              <p className="text-xs text-[#359FA0] mb-3">Da 0 a 17 anni</p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  disabled={children <= 0}
                  className="bg-white text-[#359FA0] font-bold w-9 h-9 rounded-full
              hover:bg-[#359FA0] hover:text-white disabled:opacity-40
              disabled:cursor-not-allowed transition-all"
                >
                  −
                </button>

                <span className="font-bold text-[#359FA0] text-xl">
                  {children}
                </span>

                <button
                  onClick={() => setChildren(Math.min(9, children + 1))}
                  disabled={children >= 9}
                  className="bg-white text-[#359FA0] font-bold w-9 h-9 rounded-full
              hover:bg-[#359FA0] hover:text-white disabled:opacity-40
              disabled:cursor-not-allowed transition-all"
                >
                  +
                </button>
              </div>
            </div>
          </aside>

          {/* COLONNA CENTRALE - INFORMAZIONI */}
          <div className="flex flex-col justify-center items-center text-center p-4">
            <span className="text-6xl mb-4">👨‍👩‍👧‍👦</span>

            <h3 className="font-bold text-[#359FA0] text-xl mb-3">
              Organizza il tuo viaggio
            </h3>

            <p className="text-gray-600 max-w-md">
              Indica quante persone parteciperanno alla vacanza. Potrai così
              trovare le soluzioni più adatte alle esigenze di tutti i
              viaggiatori.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Puoi selezionare fino a 9 adulti e 9 bambini.
            </p>

            <button
              onClick={() => setActiveSection("dates")}
              className="bg-[#FF8C52] text-white hover:bg-[#e07c4a]
          font-bold h-12 w-32 rounded-lg mt-8 self-end transition-all"
            >
              Avanti ➡️
            </button>
          </div>

          {/* COLONNA DESTRA - RIEPILOGO */}
          <div
            className="flex flex-col items-center justify-center
      bg-white/50 rounded-xl p-5"
          >
            <h3 className="font-bold text-[#359FA0] text-lg mb-5">
              I tuoi viaggiatori
            </h3>

            <span className="text-6xl mb-4">🧳</span>

            <div className="w-full flex justify-between border-b border-gray-300 py-3">
              <span className="text-gray-600">Adulti</span>
              <span className="font-bold text-[#359FA0]">{adults}</span>
            </div>

            <div className="w-full flex justify-between border-b border-gray-300 py-3">
              <span className="text-gray-600">Bambini</span>
              <span className="font-bold text-[#359FA0]">{children}</span>
            </div>

            <div className="w-full flex justify-between py-3 mt-2">
              <span className="font-bold text-gray-700">Totale</span>
              <span className="font-bold text-[#FF8C52] text-xl">
                {adults + children}
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              {adults + children === 1 ? "Viaggiatore" : "Viaggiatori"} in
              totale
            </p>
          </div>
        </section>
      )}

      {/* PANNELLO DATES */}
      {activeSection === "dates" && (
        <section className="grid grid-cols-[250px_1fr_350px] gap-8 bg-[#FFF0C5] p-3 min-h-[350px]">
          {/* COLONNA SINISTRA - DATE */}
          <aside className="flex flex-col gap-4">
            <h3 className="font-bold text-[#359FA0] text-lg mb-2">
              Quando vuoi partire?
            </h3>

            {/* PARTENZA */}
            <div className="bg-[#8AD6D1] rounded-lg p-4">
              <label className="block font-bold text-[#359FA0] mb-2">
                📅 Data di partenza
              </label>

              <input
                type="date"
                value={departureDate}
                min={new Date().toLocaleDateString("en-CA")}
                onChange={(e) => {
                  const newDate = e.target.value;
                  setDepartureDate(newDate);

                  if (returnDate && returnDate <= newDate) {
                    setReturnDate("");
                  }
                }}
                className="w-full bg-white text-[#359FA0] rounded-lg
            px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF8C52]"
              />
            </div>

            {/* RITORNO */}
            <div className="bg-[#8AD6D1] rounded-lg p-4">
              <label className="block font-bold text-[#359FA0] mb-2">
                📅 Data di ritorno
              </label>

              <input
                type="date"
                value={returnDate}
                min={departureDate || new Date().toLocaleDateString("en-CA")}
                disabled={!departureDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-white text-[#359FA0] rounded-lg
            px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF8C52]
            disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </aside>

          {/* COLONNA CENTRALE - INFORMAZIONI */}
          <div className="flex flex-col justify-center items-center text-center p-4">
            <span className="text-6xl mb-4">🌴</span>

            <h3 className="font-bold text-[#359FA0] text-xl mb-3">
              Scegli le date della tua vacanza
            </h3>

            <p className="text-gray-600 max-w-md">
              Seleziona quando desideri partire e quando vorresti tornare. Ti
              mostreremo le soluzioni disponibili nel periodo scelto.
            </p>

            {!departureDate && (
              <p className="text-sm text-gray-500 mt-4">
                Inizia selezionando la data di partenza.
              </p>
            )}

            {departureDate && !returnDate && (
              <p className="text-sm text-[#359FA0] font-semibold mt-4">
                Ora scegli la data di ritorno.
              </p>
            )}

            <button
              disabled={
                !departureDate || !returnDate || returnDate <= departureDate
              }
              className="bg-[#FF8C52] text-white hover:bg-[#e07c4a]
          disabled:bg-gray-300 disabled:cursor-not-allowed
          font-bold h-12 w-32 rounded-lg mt-8 self-end transition-all"
            >
              Cerca 🔎
            </button>
          </div>

          {/* COLONNA DESTRA - RIEPILOGO */}
          <div
            className="flex flex-col items-center justify-center
      bg-white/50 rounded-xl p-5"
          >
            <h3 className="font-bold text-[#359FA0] text-lg mb-5">
              Il tuo soggiorno
            </h3>

            <span className="text-6xl mb-4">🗓️</span>

            <div className="w-full flex justify-between border-b border-gray-300 py-3">
              <span className="text-gray-600">Partenza</span>
              <span className="font-bold text-[#359FA0]">
                {departureDate
                  ? new Date(departureDate + "T00:00:00").toLocaleDateString(
                      "it-IT",
                    )
                  : "-- / -- / ----"}
              </span>
            </div>

            <div className="w-full flex justify-between border-b border-gray-300 py-3">
              <span className="text-gray-600">Ritorno</span>
              <span className="font-bold text-[#359FA0]">
                {returnDate
                  ? new Date(returnDate + "T00:00:00").toLocaleDateString(
                      "it-IT",
                    )
                  : "-- / -- / ----"}
              </span>
            </div>

            {departureDate && returnDate && returnDate > departureDate && (
              <div className="mt-5 text-center">
                <p className="text-sm text-gray-500">Durata della vacanza</p>

                <p className="text-2xl font-bold text-[#FF8C52] mt-1">
                  {Math.round(
                    (new Date(returnDate + "T00:00:00") -
                      new Date(departureDate + "T00:00:00")) /
                      (1000 * 60 * 60 * 24),
                  )}{" "}
                  notti
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
