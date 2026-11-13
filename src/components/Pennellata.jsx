const Pennellata = ({ colore }) => (
  <svg
    viewBox="0 0 400 90"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 29 Q22 19 48 23 L105 16 L158 21 L218 13 L270 19 L330 14 L382 22 L394 29 L381 39 L390 49 L367 55 L340 53 L300 64 L250 58 L205 69 L155 60 L110 67 L65 59 L24 64 L5 52 L15 42 Z"
      fill={colore}
    />

    <path
      d="M22 27 Q100 18 180 25 T375 23 M18 52 Q100 60 190 53 T380 48"
      fill="none"
      stroke={colore}
      strokeWidth="5"
      strokeLinecap="round"
      opacity="0.55"
    />
  </svg>
);
export default Pennellata;
