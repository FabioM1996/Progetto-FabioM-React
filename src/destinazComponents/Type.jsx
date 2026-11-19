export default function Type({
  activeSection,
  setActiveSection,
  selectedType,
  setSelectedType,
  selectedAirport,
  setSelectedAirport,
}) {
  // STATES

  return (
    <>
      {/* PANNELLO TYPE */}
      {activeSection === "type" && (
        <section className="grid grid-cols-[250px_1fr_350px] gap-8 bg-[#FFF0C5] p-3 min-h-87.5">
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
                onClick={() => setActiveSection("guests")}
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
    </>
  );
}
