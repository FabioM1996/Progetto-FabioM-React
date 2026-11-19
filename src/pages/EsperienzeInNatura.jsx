export default function EsperienzeInNatura() {
  return (
    <main className="bg-[#FFF0C5] min-h-screen p-6 m-2">
      <h2 className="text-4xl font-bold text-[#359FA0] text-center mb-3">
        Esperienze nella Natura
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Vivi avventure indimenticabili tra paesaggi mozzafiato, animali
        selvatici e meraviglie naturali provenienti da ogni parte del mondo.
      </p>

      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* SAFARI KENYA */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[#8AD6D1] p-6">
            <h2 className="text-2xl font-bold text-[#359FA0]">
              🦁 Safari nella Savana del Kenya
            </h2>

            <p className="text-[#359FA0] mt-2">
              7 giorni immersi nella natura africana.
            </p>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-[#359FA0] mb-3">
              Esperienze incluse
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>🐘 Avvistamento degli elefanti</li>
              <li>🦁 Safari fotografico tra i Big Five</li>
              <li>🌅 Tramonti nella savana</li>
              <li>🏕️ Pernottamento in lodge panoramici</li>
            </ul>

            <p className="mt-6 text-gray-600">
              Un viaggio dedicato agli amanti della fauna selvatica, tra
              paesaggi sconfinati, incontri emozionanti e scenari che sembrano
              usciti da un documentario.
            </p>

            <button className="mt-6 bg-[#FF8C52] text-white px-5 py-2 rounded-lg hover:bg-[#e07c4a] transition">
              Scopri l'esperienza
            </button>
          </div>
        </article>

        {/* FIORDI NORVESI */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[#8AD6D1] p-6">
            <h2 className="text-2xl font-bold text-[#359FA0]">
              ❄️ Avventura nei Fiordi Norvegesi
            </h2>

            <p className="text-[#359FA0] mt-2">
              6 giorni tra montagne, ghiacciai e acque cristalline.
            </p>
          </div>

          <div className="p-6">
            <h3 className="font-bold text-[#359FA0] mb-3">
              Esperienze incluse
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>🚢 Crociera nei fiordi</li>
              <li>🥾 Escursioni panoramiche</li>
              <li>🏔️ Visita ai ghiacciai</li>
              <li>🌌 Osservazione dell'aurora boreale</li>
            </ul>

            <p className="mt-6 text-gray-600">
              Un itinerario pensato per chi sogna la natura incontaminata del
              Nord Europa, tra vette spettacolari, cascate e villaggi
              affacciati sui fiordi.
            </p>

            <button className="mt-6 bg-[#FF8C52] text-white px-5 py-2 rounded-lg hover:bg-[#e07c4a] transition">
              Scopri l'esperienza
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}