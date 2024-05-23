import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-5 py-3 border-b-2 border-b-yellow-500 sticky top-0 bg-black z-[200]">
      <Link to="/">
        <img
          src="./nammafreelancelogo.gif"
          alt="nav logo"
          className="w-[150px] lg:w-[250px] pt-2"
        />
      </Link>
      <ul>
        <li>Hello</li>
      </ul>
    </nav>
  );
};

export default Navbar;
