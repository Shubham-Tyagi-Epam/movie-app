import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ data }) => {
  return (
    <div
      className="card text-light movie-card bg-info "
      style={{ border: "none", width: "100%" }}
    >
      <Link to={`/movie/${data.imdbID}`} style={{ textDecoration: "none" }}>
        <div>
          <img
            src={data.Poster}
            style={{ height: "28rem", width: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div
          className="card-body flex-grow-1 movie-data-body container-fluid card-text mx-0 my-0 py-2 px-1"
          style={{ width: "100%" }}
        >
          <div className="row text-justify-between">
            <div className="col-9 text-start">{data.Title}</div>
            <div className="col-3 text-end">
              <span className="border px-2 py-0 rounded">{data.Year}</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-9 text-start ">
              <span className="">{data.Genre}</span>
            </div>
            <div className="col-3 text-end ">
              <span className="px-2 py-0 rounded bg-rating">
                {data.imdbRating}
              </span>
            </div>
          </div>
          {/* <div className="">{data.Title}</div>
            <br />
            <div className="position-absolute bottom-0 mb-4">{data.Year}</div> */}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
