function Card({ title, imgUrl, children, isVisited, textSize }) {
  return (
    <div className="group mx-auto mt-2 rounded-2xl overflow-hidden bg-[#FFF0C5] h-88 border-2 border-[#FFF0C5]">
      <img src={imgUrl} alt="picture" className="h-48 w-full group-hover:scale-110 transition duration-500" />
      <div className="flex flex-col p-2.5">
        <h2 className="text-2xl text-[#FF8C52] font-bold">{title}</h2>
        <p className={`${textSize} text-gray-500`}>{children}</p>
        <span>{isVisited ? "Visitata" : "Non visitata"}</span>
      </div>
    </div>
  );
}

export default Card;
