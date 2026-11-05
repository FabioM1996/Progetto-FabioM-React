import { useState } from "react";
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
        <section className="w-full h-10"></section>
        <div className="grid grid-cols-4 gap-5">
          {cities.map((city) => (
            <Card
              key={city.id}
              title={city.title}
              isVisited={city.isVisited}
              textSize={city.textSize}
              imgUrl={city.imgUrl}
            >
              {city.description}
            </Card>
          ))}
        </div>
        <div className="space"></div>
        <CardForm addCity={addCity}></CardForm>
      </main>
      <section id="spacer"></section>
    </>
  );
}
