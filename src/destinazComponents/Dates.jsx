export default function Dates({
  activeSection,
  setActiveSection,
  departureDate,
  setDepartureDate,
  returnDate,
  setReturnDate,
}) {
  return (
    <>
      {/* PANNELLO DATES */}
      {activeSection === "dates" && (
        <section className="grid grid-cols-[250px_1fr_350px] gap-8 bg-[#FFF0C5] p-3 min-h-87.5">
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
              onClick={() => setActiveSection("summary")}
              className="bg-[#FF8C52] text-white hover:bg-[#e07c4a]
          disabled:bg-gray-300 disabled:cursor-not-allowed
          font-bold h-12 w-32 rounded-lg mt-8 self-end transition-all"
            >
              Conferma
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
    </>
  );
}
