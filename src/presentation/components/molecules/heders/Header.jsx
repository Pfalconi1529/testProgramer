/**
 *
 * todo: Encabezado público
 *
 */

import { Link } from "react-router-dom";
import "../../../styles/style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-danger">
      <div className="container-fluid name  ">
        <span className="navbar-brand mb-0 h1">Patricio Falconi</span>
        <ul className="content-link">
          <li>
            <Link className="me-2 btn btn-dark  " to={"/front"}>
              Front-end
            </Link>
          </li>
          <li>
            <Link className="btn btn-dark" to={"/"}>
              Back-end
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
