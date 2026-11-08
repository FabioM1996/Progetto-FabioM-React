import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="border-b-2 border-black flex items-center h-20">
        <div className=" h-20 text-center flex mr-auto ml-10 ">
          <Link to="/" className="h-full flex items-center">
            <img
              src="src/assets/koala-orange.webp"
              alt="logo"
              className="h-full border-2 border-[#359FA0]"
            />
          </Link>
          <span className="flex items-center ml-10 text-shadow-md charm-bold font-extrabold ">
            Koala viaggi 🐨
          </span>
        </div>
        <div className=" ml-1">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 relative top-1 text-black/70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        {/* primo div */}
        <div className="p-2 ml-1">
          <a
            href="#"
            className="flex items-center gap-0.5 border border-[#9ca3af] p-0.5 rounded-2xl hover:bg-orange-200"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-black/60 ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
            </div>
            <span className="flex flex-col px-2 text-sm">
              <span className="text-gray-600">Trova</span>
              <span className="font-semibold text-[#359FA0]/80">Agenzia</span>
            </span>
          </a>
        </div>
        {/* SECONDO DIV */}
        <a href="#">
        <div className="p-1 ml-1 flex items-center gap-2 border-r border-[#9ca3af] hover:bg-orange-200 ">
          <span>📱</span>
          <div className="flex flex-col text-sm text-gray-600">
            <span className="text-center text-xs">Chiamaci al </span>
            <span className="text-start">00000000011</span>
          </div>
        </div></a>
        {/* TERZO DIV */}
        <div className="p-2 ml-1 mr-16 ">
          <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-black/60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg></a>
        </div>
      </header>
    </>
  );
}
export default Header;
