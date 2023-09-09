import { useContext } from "react";
import userContext from "../utils/userContext";

const Header = () => {
  const { name } = useContext(userContext);

  return (
    <div className="fixed right-0 left-0 z-10 flex flex-col md:flex-row justify-between bg-white shadow-lg py-8 md:px-14 text-zinc-700 items-center">
      <div>
        <h1 className="font-bold text-xl">{name}</h1>
      </div>
      <ul className="flex md:gap-5 gap-2 font-semibold text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Header;
