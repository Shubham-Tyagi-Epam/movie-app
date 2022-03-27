import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useSearchParams } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ navbar }) {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <li className="nav-item">
        <NavLink
          to="/"
          className={"nav-link" + (navbar ? "text-light" : "text-danger")}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className={navbar ? "text-light fs-4" : "text-danger fs-4"}
          />
        </NavLink>
      </li>
    </>
  );
}

export default Search;
