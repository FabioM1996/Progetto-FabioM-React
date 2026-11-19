
import { useState } from "react";

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    argomento: "Informazioni sui viaggi",
    messaggio: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Grazie per averci contattato! 🐨");
    setFormData({
      nome: "",
      email: "",
      argomento: "Informazioni sui viaggi",
      messaggio: "",
    });
  };

  return (
    <main className="bg-[#f8faf9] min-h-screen pb-16 m-2">

      {/* INTRODUZIONE */}
      <section className="bg-[#359FA0] text-white py-14 px-6 text-center">
        <span className="text-4xl">🐨</span>
        <h2 className="text-4xl font-extrabold mt-3">
          Siamo qui per te!
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
          Hai bisogno di informazioni per il tuo prossimo viaggio?
          Il team di Koala Viaggi è pronto ad aiutarti a organizzare
          la tua prossima avventura.
        </p>
      </section>

      {/* CONTATTI */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Come puoi contattarci?
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Scegli il modo più comodo per parlare con noi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* TELEFONO */}
          <div className="bg-white shadow-md rounded-2xl p-7 text-center border-b-4 border-[#359FA0] hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-lg text-gray-800">
              Chiamaci
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Parla direttamente con un nostro operatore.
            </p>
            <a href="tel:00000000011" className="block mt-4 font-bold text-[#359FA0] hover:text-orange-500">
              00000000011
            </a>
          </div>

          {/* EMAIL */}
          <div className="bg-white shadow-md rounded-2xl p-7 text-center border-b-4 border-orange-400 hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="font-bold text-lg text-gray-800">
              Scrivici
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Inviaci una mail per qualsiasi informazione.
            </p>
            <a href="mailto:info@koalaviaggi.it" className="block mt-4 font-bold text-[#359FA0] hover:text-orange-500">
              info@koalaviaggi.it
            </a>
          </div>

          {/* SEDE */}
          <div className="bg-white shadow-md rounded-2xl p-7 text-center border-b-4 border-[#359FA0] hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-lg text-gray-800">
              Vieni a trovarci
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Il nostro staff ti aspetta in agenzia.
            </p>
            <span className="block mt-4 font-bold text-[#359FA0]">
              Torino, Italia
            </span>
          </div>

        </div>
      </section>

      {/* FORM CONTATTI */}
      <section className="max-w-5xl mx-auto px-6">

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* TESTO LATERALE */}
          <div className="bg-[#359FA0] text-white p-8 md:p-10 flex flex-col justify-center">
            <span className="text-5xl mb-5">🌍</span>
            <h2 className="text-3xl font-bold">
              Raccontaci il tuo prossimo viaggio!
            </h2>
            <p className="mt-5 text-white/90 leading-relaxed">
              Stai sognando una vacanza al mare, un viaggio
              avventuroso o una fuga romantica?
              Scrivici, ti aiuteremo a trovare la soluzione
              perfetta per te.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <p>✈️ Consigli sulle destinazioni</p>
              <p>🏝️ Offerte e pacchetti vacanza</p>
              <p>💬 Assistenza personalizzata</p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-8 md:p-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Inviaci un messaggio
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nome e cognome
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Il tuo nome..."
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#359FA0] focus:ring-2 focus:ring-[#359FA0]/20"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="La tua email..."
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#359FA0] focus:ring-2 focus:ring-[#359FA0]/20"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Argomento
              </label>
              <select
                name="argomento"
                value={formData.argomento}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 bg-white outline-none focus:border-[#359FA0]"
              >
                <option>Informazioni sui viaggi</option>
                <option>Preventivo vacanza</option>
                <option>Prenotazioni</option>
                <option>Assistenza</option>
                <option>Altro</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Messaggio
              </label>
              <textarea
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Come possiamo aiutarti?"
                className="w-full border border-gray-300 rounded-lg p-3 resize-none outline-none focus:border-[#359FA0] focus:ring-2 focus:ring-[#359FA0]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF8C52] hover:bg-[#e07c4a] active:bg-[#8AD6D1] text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Invia messaggio 🐨
            </button>

          </form>
        </div>
      </section>

      {/* ORARI */}
      <section className="max-w-4xl mx-auto px-6 mt-14 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Quando puoi trovarci?
        </h2>
        <div className="bg-orange-100 rounded-2xl p-6">
          <p className="text-gray-700 font-semibold">
            🕒 I nostri orari di apertura
          </p>
          <p className="text-gray-600 mt-3">
            Lunedì - Venerdì: 09:00 - 18:00
          </p>
          <p className="text-gray-600">
            Sabato: 09:00 - 13:00
          </p>
          <p className="text-gray-600">
            Domenica: Chiuso
          </p>
        </div>
      </section>

    </main>
  );
}


