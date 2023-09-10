import { useContext, useState } from "react";
import userContext from "../utils/userContext";
import { GiHamburgerMenu } from "react-icons/gi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaXmark } from "react-icons/fa6";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name } = useContext(userContext);
  const menuItems = ["home", "about", "certification", "projects", "contact"];
  return (
    <div className="fixed right-0 left-0 z-10 flex flex-row justify-between bg-white shadow-lg py-6 px-14 text-zinc-700 items-center">
      <div>
        <AnchorLink href="#home">
          <h1 className="font-bold text-xl">{name}</h1>
        </AnchorLink>
      </div>
      <div
        className={
          isMenuOpen ? "rotate-90 duration-500" : "-rotate-180 duration-500"
        }
        onClick={() =>
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
      >
        {!isMenuOpen ? (
          <GiHamburgerMenu className="text-3xl hover:text-blue-600 md:hidden cursor-pointer" />
        ) : (
          <FaXmark className="text-3xl hover:text-blue-600 md:hidden cursor-pointer" />
        )}
      </div>

      <ul
        className={
          isMenuOpen
            ? "absolute select-none md:static flex flex-col md:flex-row gap-5 left-0 top-16 w-full md:w-fit items-center p-10 md:p-0 bg-white md:bg-none shadow-xl md:shadow-none font-semibold text-lg"
            : "hidden font-semibold text-lg md:flex gap-10"
        }
      >
        {menuItems.map((item, i) => (
          <li
            key={i}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-cyan-600"
          >
            <AnchorLink href={"#" + item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
