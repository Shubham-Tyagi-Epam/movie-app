import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar/Navbar";

const Header = ({ searchKey, Functionality }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let srch = searchParams.get("search");
  const [searchText, setSearchText] = useState(srch || "Harry");
  console.log("srch = " + srch);
  function changeHandler(event) {
    let search = event.target.value;
    setSearchParams({ search });
    setSearchText(event.target.value);
  }

  function submitHandler() {
    searchKey();
    // console.log("search string = " + searchParams());
  }
  console.log(Functionality);
  return (
    <>
      <div className="header">
        <Navbar Functionality={Functionality}></Navbar>
        <div className="header-img"></div>
        <div className="movie-search position-absolute w-100 container">
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                className="form-control p-2 fs-5 bg-dark text-light"
                placeholder="Search Movie"
                onChange={changeHandler}
                value={searchText}
              ></input>
            </div>
            <div className="col-3">
              <button
                className="btn btn-danger p-2 fs-5 w-100"
                onClick={submitHandler}
              >
                {" "}
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
