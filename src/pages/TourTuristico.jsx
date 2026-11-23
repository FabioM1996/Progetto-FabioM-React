export default function TourTuristico() {
  return (
    <>
      <h3 className="text-4xl font-semibold text-[#359FA0] text-center my-3">
        Tour Organizzati
      </h3>
      <p className="text-center text-[#8AD6D1] mb-10">
        Scopri alcuni dei nostri itinerari più apprezzati e lasciati guidare
        alla scoperta di luoghi straordinari.
      </p>
      <main className="bg-[#FFF0C5] min-h-screen p-6 m-2">
        <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* TOUR MEDITERRANEO */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#8AD6D1] p-6">
              <h2 className="text-2xl font-bold text-[#359FA0]">
                🌊 Gran Tour del Mediterraneo
              </h2>
              <p className="text-[#359FA0] mt-2">
                8 giorni tra mare, storia e cultura.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-[#359FA0] mb-3">
                Tappe principali
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>Roma</li>
                <li>Atene</li>
                <li>Pompei</li>
                <li>Barcellona</li>
              </ul>

              <p className="mt-6 text-gray-600">
                Un itinerario pensato per chi desidera vivere il fascino del
                Mediterraneo tra siti archeologici, cucina locale e panorami
                mozzafiato.
              </p>

              <button className="mt-6 bg-[#FF8C52] text-white px-5 py-2 rounded-lg hover:bg-[#e07c4a] transition">
                Scopri il tour
              </button>
            </div>
          </article>

          {/* TOUR AMERICA */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#8AD6D1] p-6">
              <h2 className="text-2xl font-bold text-[#359FA0]">
                🗽 Tour Coast to Coast USA
              </h2>
              <p className="text-[#359FA0] mt-2">
                12 giorni tra le città simbolo d'America.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-[#359FA0] mb-3">
                Tappe principali
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>🗽 New York</li>
                <li>🏛️ Washington D.C.</li>
                <li>🎰 Las Vegas</li>
                <li>🌉 San Francisco</li>
              </ul>

              <p className="mt-6 text-gray-600">
                Dalle luci di Times Square ai panorami della California, un
                viaggio indimenticabile attraverso alcune delle destinazioni più
                iconiche degli Stati Uniti.
              </p>

              <button className="mt-6 bg-[#FF8C52] text-white px-5 py-2 rounded-lg hover:bg-[#e07c4a] transition">
                Scopri il tour
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
