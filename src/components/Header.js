const Header = () => {
  return (
    <div className="fixed right-0 left-0 z-10 flex justify-between bg-white shadow-lg py-8 px-14 text-zinc-700 items-center">
      <div>
        <h1 className="font-bold text-xl">Surjith.dev</h1>
      </div>
      <ul className="flex gap-5 font-semibold text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Header;
