import { NavLink, Link, useLocation } from "react-router-dom";
import "../Styles/Nav.css";
const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navBar">
      <Link to="/" className="logo">
        My Logo
      </Link>
      <ul>
        <li>
          <Link
            to="/"
            className={pathname === "/" ? "home-link active" : "home-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className={
              pathname === "/create" ? "create-link active" : "create-link"
            }
          >
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
