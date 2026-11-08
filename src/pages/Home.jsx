import { useState } from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import "../App.css";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

export default function Home() {
  const addCity = (city) => {
    setCities([...cities, city]);
  };
  // trasformiamo il nostro array in uno state
  const [cities, setCities] = useState([
    {
      id: 0,
      isVisited: true,
      title: "Tokyo",
      textSize: "text-sm",
      description:
        "Tokyo è una metropoli futuristica che unisce grattacieli, tradizioni millenarie e dinamismo incessante.",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      isVisited: true,
      title: "Parigi",
      textSize: "text-base",
      description:
        "Parigi è una vibrante metropoli d'arte, storia, moda e romanticismo sulla Senna.",
      imgUrl:
        "https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      isVisited: true,
      title: "Barcellona",
      textSize: "text-base",
      description: "Barcellona è una splendida città tra mare, arte e Gaudí.",
      imgUrl:
        "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?q=80&w=1052&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      isVisited: false,
      title: "Torino",
      textSize: "text-base",
      description:
        "Eleganza barocca, portici storici, musei straordinari, Alpi imponenti, capitale sabauda.",
      imgUrl:
        "https://images.unsplash.com/photo-1699449566081-4e3282c7c0ed?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  const [selectedCity, setSelectedCity] = useState(null);

  function apriCartolina(city) {
    setSelectedCity(city);
  }

  const cartolinaRef = useRef();

  const scaricaCartolina = async () => {
    const canvas = await html2canvas(cartolinaRef.current);

    const link = document.createElement("a");

    link.download = `${selectedCity.title}.png`;

    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  return (
    <>
      <NavBar></NavBar>
      <main className="p-2.5 m-2.5">
        <div className="fixed z-30 bottom-2 right-2 size-32">
          <img
            src="src/assets/koala-orange.webp"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <Hero></Hero>
        <section className="w-full h-10">
          <h2 id="cartoline" className="text-[#359FA0] mt-3">
            Seleziona una card per creare la tua cartolina personalizzata!
          </h2>
        </section>
        <div className="grid grid-cols-4 gap-5">
          {cities.map((city) => (
            <Card
              key={city.id}
              title={city.title}
              isVisited={city.isVisited}
              textSize={city.textSize}
              imgUrl={city.imgUrl}
              onCardClick={() => apriCartolina(city)}
            >
              {city.description}
            </Card>
          ))}
        </div>
        {selectedCity && (
          <div className="flex flex-col gap-1 w-125">
            <div
              ref={cartolinaRef}
              className="bg-white p-5 rounded-xl w-125 shadow-lg"
            >
              {/* className="bg-white p-6 rounded-xl w-[500px]" */}
              <h2 className="text-3xl font-bold text-[#FF8C52] mb-4">
                {selectedCity.title}
              </h2>
              <img
                className="w-full h-60 object-cover rounded-lg"
                src={selectedCity.imgUrl}
                alt={selectedCity.title}
              />
              <p className="mt-4 text-gray-600">{selectedCity.description}</p>
            </div>
            <button
              onClick={scaricaCartolina}
              className="bg-[#FF8C52] hover:bg-[#e07c4a] text-gray-700 p-1"
            >
              Scarica Cartolina
            </button>
          </div>
        )}
        <div className="space"></div>
        <CardForm addCity={addCity}></CardForm>
      </main>
      <section id="spacer"></section>
    </>
  );
}
