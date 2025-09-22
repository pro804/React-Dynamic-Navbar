import { FaBars } from "react-icons/fa";
import useGlobalContext from "../hooks/useGlobalContext";

const Navbar = () => {
  const { openSidbar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Dynamic NavBar</h3>
        <button className="toggle-btn" onClick={openSidbar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
