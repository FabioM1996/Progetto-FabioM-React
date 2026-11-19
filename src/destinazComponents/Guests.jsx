export default function Guests({
  activeSection,
  setActiveSection,
  adults,
  setAdults,
  children,
  setChildren,
}) {
  return (
    <>
      {/* PANNELLO OSPITI */}
      {activeSection === "guests" && (
        <section className="grid grid-cols-[250px_1fr_350px] gap-8 bg-[#FFF0C5] p-3 min-h-87.5">
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
    </>
  );
}
