export default function Summary({
  selectedCountry,
  selectedCity,
  selectedArea,
  selectedType,
  adults,
  children,
  departureDate,
  returnDate,
}) {
  return (
    <>
      <section className=" bg-[#FFF0C5] p-3 mt-3">
        <h3 className="mb-4 mt-2 text-3xl">Riepilogo del tuo viaggio</h3>
        <div className="flex gap-10 justify-center p-2">
          <div>
            <h3>Nome e cognome dal login</h3>
            <p>{`${selectedArea} - ${selectedCountry} - ${selectedCity} `}</p>
          </div>
          <div>
            <h3>Data andata e ritorno</h3>
            <p>{`${departureDate} ritorno ${returnDate}`}</p>
            <h3>Viaggiatori</h3>
            <p>{`${selectedType} - ${adults} - ${children} `}</p>
          </div>
        </div>
      </section>
    </>
  );
}
