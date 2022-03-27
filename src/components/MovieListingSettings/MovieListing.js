import React from "react";
import "./MovieListingSettings.css";

function MovieListingSettings({ totalMovies, changeSort, sortParam }) {
  return (
    <div className="container-fluid bg-info mb-4 text-light p-3 movie-listing-settings">
      <div className="row align-items-center">
        <div className="col-sm-4 text-center">
          <p className="mb-0 fw-bold">{totalMovies} Movies found</p>
        </div>
        <div className="col-sm-6 offset-sm-2   pt-3 pt-sm-0 text-center text-uppercase">
          Sort by{" "}
          <div
            className={
              "ms-3 d-inline p-1 px-3 sort-param " +
              (sortParam === "Year" ? "bg-danger" : "bg-sort-param-inactive")
            }
            onClick={() => changeSort("Year")}
          >
            Release Data
          </div>
          <div
            className={
              "d-inline p-1 px-3 sort-param " +
              (sortParam === "Rating" ? "bg-danger" : "bg-sort-param-inactive")
            }
            onClick={() => {
              changeSort("Rating");
            }}
          >
            Rating
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieListingSettings;
