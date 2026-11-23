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
      <section className=" bg-[#FFF0C5] p-3 mt-3 my-auto">
        <h3 className="mb-4 mt-2 text-3xl font-semibold">Riepilogo del tuo viaggio</h3>
        <div className="flex gap-10 justify-center p-2">
          <div>
            <h3 className="font-semibold">Nome e cognome dal login</h3>
            <p>{`${selectedArea.name} - ${selectedCountry.name} - ${selectedCity} `}</p>
          </div>
          <div>
            <h3 className="font-semibold">Data andata e ritorno</h3>
            <p>{`${departureDate} - ${returnDate}`}</p>
            <h3 className="font-semibold">Viaggiatori</h3>
            <p>{`Tipologia: ${selectedType};  adulti: ${adults} - bambini: ${children} `}</p>
          </div>
        </div>
      </section>
    </>
  );
}
