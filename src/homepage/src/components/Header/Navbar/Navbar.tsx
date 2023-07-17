import HamburgerMenu from "../Navbar/HamburgerMenu/HamburgerMenu";
import facebook from "../../../assets/images/icon-facebook.svg";
import twitter from "../../../assets/images/icon-twitter.svg";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}
//


const Navbar: React.FC<NavbarProps> = ({ toggleMenu, isMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <nav aria-label="Main">
      <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <ul
        id="navbar-menu"
        className={`transition-visibility invisible  absolute top-0 left-0 z-40 flex h-full w-full flex-col items-end justify-between bg-very-dark-blue/90 tracking-widest opacity-0 md:visible md:static md:h-auto md:w-auto md:flex-row md:items-end md:justify-start md:gap-[3rem]  md:p-0 md:text-[0.8125rem] md:opacity-100 ${
          isMenuOpen ? "!visible px-8 pt-24 pb-8 opacity-100" : ""
        }`}
      >
        <li>
          <a
            href="/features"
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            Features
          </a>
        </li>
        <li>
          <a
            onClick={() => navigate("/Invoices")}
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            My Invoices
          </a>
        </li>
        <li>
          <button
            onClick={() => navigate("/Login")}
            className="block bg-blue-500 uppercase align-items-center justify-center text-white font-bold border-blue-500 transition duration-300 hover:text-blue-500 sm:rounded-md sm:text-sm sm:p-1 md:rounded-md md:border-[0.188rem] md:bg-soft-red md:py-2 md:px-5 md:hover:bg-white"
          >
            Login 
          </button>
        </li>
        <li className="md:hidden">
          <ul className="flex items-center gap-8 ">
            <li>
              <a
                href="#"
                className="block text-2xl uppercase text-slate-900"
                aria-label="facebook"
              >
                <img
                  src={facebook}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-2xluppercase block text-slate-900"
                aria-label="twitter"
              >
                <img
                  src={twitter}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
