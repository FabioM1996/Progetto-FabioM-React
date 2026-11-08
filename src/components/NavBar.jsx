import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="relative">
        <ul className="flex gap-20 justify-center bg-[#FFF0C5]">
          {/* <li>
            <img
              className="w-10 h-10"
              src="../src/assets/logo.jpg"
              alt="logo"
            />
          </li> */}
          <li className=" hover:bg-[#ff8c529c] h-13.25 flex justify-center items-center">
            <Link to="/destinazioni" className="a p-2  border-x-2 border-x-[#ff8c5293] text-[#359FA0] ">
              Destinazioni
            </Link>
          </li>
          <li className=" hover:bg-[#ff8c529c] h-13.25 flex justify-center items-center">
            <Link to="/contatti" className="a p-2  text-[#359FA0] border-x-2 border-x-[#ff8c5293] ">
              Contatti
            </Link>
          </li>
          <li className="hover:bg-[#ff8c529c] h-13.25 flex justify-center items-center">
            <a href="" className="a p-2  text-[#359FA0] border-x-2 border-x-[#ff8c5293]">
              Tour turistico
            </a>
          </li>
          <li className="hover:bg-[#ff8c529c]  h-13.25 flex justify-center items-center">
            <a href="" className="a p-2  text-[#359FA0] border-x-2 border-x-[#ff8c5293]">
              Esperienze in natura
            </a>
          </li>
        </ul>
<a href="#cartoline"
  className="
    absolute
    right-6
    top-1/2
    -translate-y-1/2
    bg-[#FF8C52]
    text-white
    px-3
    py-1
    rounded-full
    text-sm
    font-semibold
    shadow-md
  "
>
  📸 Crea una Cartolina
</a>
      </nav>
    </>
  );
}
export default NavBar;
