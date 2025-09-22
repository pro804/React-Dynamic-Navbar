import { FaBars } from "react-icons/fa";
import useGlobalContext from "../hooks/useGlobalContext";
import { MdOutlineDynamicForm } from "react-icons/md";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <div className="logo-container">
          <MdOutlineDynamicForm />
          <h3> Dynamic Navbar</h3>
        </div>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
