import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgUrl: "",
    isVisited: false,
    textSize: "text-base",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target; // destructuring
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      isVisited: formData.isVisited,
      title: formData.title,
      textSize: "text-base",
      description: formData.description,
      imgUrl: formData.imgUrl,
    };
    setFormData({
      title: "",
      description: "",
      imgUrl: "",
      isVisited: false,
      textSize: "text-base",
    });
    addCity(city);
  };
  return (
    <>
    <h3 className="text-left">Crea la tua cartolina</h3>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 w-80 mb-10 bg-[#FFF0C5] p-3 rounded-lg mt-4 mx-10"
    >
      <label htmlFor="title" className="self-start text-[#359FA0] font-semibold">
        Nome città
      </label>
      <input
        name="title"
        id="title"
        className="bg-gray-700 self-start border border-transparent hover:border-white mb-1"
        type="text"
        value={formData.title}
        onChange={handleInputChange}
      />
      <label htmlFor="description" className="self-start text-[#359FA0] font-semibold">
        Descrizione
      </label>
      <textarea
        name="description"
        id="description"
        className="bg-gray-700 self-start border border-transparent hover:border-white mb-1"
        value={formData.description}
        onChange={handleInputChange}
      />
      <label htmlFor="img" className="self-start text-[#359FA0] font-semibold">
        Immagine URL
      </label>
      <input
        id="img"
        name="imgUrl"
        className="bg-gray-700 self-start border border-transparent hover:border-white mb-1"
        type="text"
        value={formData.imgUrl}
        onChange={handleInputChange}
      />
      <label htmlFor="isVisited" className="self-start text-[#359FA0] font-semibold">
        Hai già visitato questa città?
      </label>
      <input
        type="checkbox"
        name="isVisited"
        id="isVisited"
        className="mb-1 self-start"
        checked={formData.isVisited}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="text-gray-600 bg-[#FF8C52] font-bold p-1 border border-transparent hover:border-white hover:border-2"
      >
        Aggiungi Card
      </button>
    </form>
    </>
  );
}

export default CardForm;
