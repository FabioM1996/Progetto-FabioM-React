import { useLocation } from "react-router-dom";

export default function Summary() {
  const { state } = useLocation();

  const {
    selectedCountry,
    selectedCity,
    selectedArea,
    selectedType,
    adults,
    children,
    departureDate,
    returnDate,
  } = state;

  return (
    <>
      <section className=" bg-[#FFF0C5] p-3 mx-1 my-auto">
        <h3 className="mb-4 mt-2 text-3xl font-semibold">Riepilogo del tuo viaggio</h3>
        <div className="flex gap-10 justify-center p-2">
          <div>
            <h3 className="font-semibold">Destinazione</h3>
            <p>{`${selectedArea.name} - ${selectedCountry.name} - ${selectedCity} `}</p>
          </div>
          <div>
            <h3 className="font-semibold">Data andata e ritorno</h3>
            <p>{`${departureDate} - ${returnDate}`}</p>
            <h3 className="font-semibold">Viaggiatori</h3>
            <p>{`Tipologia: ${selectedType};  adulti: ${adults} - bambini: ${children} `}</p>
          </div>
        </div>
        <button className="m-1 p-1.5 rounded-lg bg-[#FF8C52] text-gray-600 hover:bg-[#e07c4a] active:bg-[#8AD6D1]">Stampa il tuo biglietto 🖨️</button>
      </section>
    </>
  );
}
