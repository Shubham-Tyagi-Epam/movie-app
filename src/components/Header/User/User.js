import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function User({ navbar }) {
  return (
    <>
      <li className="nav-item">
        <NavLink
          to="/"
          className={"nav-link" + (navbar ? "text-light" : "text-danger")}
        >
          <FontAwesomeIcon
            icon={faUser}
            className={navbar ? "text-light fs-4" : "text-danger fs-4"}
          />
        </NavLink>
      </li>
    </>
  );
}

export default User;
