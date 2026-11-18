import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const agenzie = [
  {
    nome: "Agenzia Torino",
    citta: "Torino",
    via: "Via Roma 25",
    posizione: [45.0703, 7.6869],
  },
  {
    nome: "Agenzia Milano",
    citta: "Milano",
    via: "Via del Corso 100",
    posizione: [45.4642, 9.19],
  },
  {
    nome: "Agenzia Roma",
    citta: "Roma",
    via: "Via del Corso 100",
    posizione: [41.9028, 12.4964],
  },
  {
    nome: "Agenzia Firenze",
    citta: "Firenze",
    via: "Via dei Calzaiuoli 10",
    posizione: [43.7696, 11.2558],
  },
  {
    nome: "Agenzia Napoli",
    citta: "Napoli",
    via: "Via Toledo 120",
    posizione: [40.8518, 14.2681],
  },
  {
    nome: "Agenzia Palermo",
    citta: "Palermo",
    via: "Via Maqueda 50",
    posizione: [38.1157, 13.3615],
  },
];
export default function Mappa() {
  return (
    <div className="min-h-screen p-8">
      <h3 className="text-3xl text-[#8AD6D1] font-bold">Trova un'agenzia</h3>

      <p className="text-[#359FA0] mb-6">
        Scopri tutte le nostre agenzie in Italia.
      </p>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[42.5, 12.5]}
          zoom={6}
          style={{ height: "550px", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {agenzie.map((agenzia, index) => (
            <Marker key={index} position={agenzia.posizione}>
              <Popup>
                <strong>{agenzia.nome}</strong>
                <br />
                {agenzia.citta}
                <br />
                {agenzia.via}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
