import { FaBars } from "react-icons/fa";
import useGlobalContext from "../hooks/useGlobalContext";
import { MdOutlineDynamicForm } from "react-icons/md";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
    console.log(e.target);
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="logo-container">
          <MdOutlineDynamicForm />
          <h3> Dynamic Navbar</h3>
        </div>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
