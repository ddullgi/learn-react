import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import BackArrowIcon from "@/components/icons/BackArrowIcon";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className="link">
          <BackArrowIcon />
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
