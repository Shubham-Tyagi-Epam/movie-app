import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { actions } from "../../features/movies/movieSlice";
import "./MovieDetails.css";
import { FallingLines } from "react-loader-spinner";
import Search from "../Header/Search/Search";

import {
  getMovieDetails,
  fetchAsyncMovieDetails,
} from "../../features/movies/movieSlice";
import Navbar from "../Header/Navbar/Navbar";
import MovieListing from "../MovieListing/MovieListing";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieDetails);
  console.log("movie detail Data = " + data);
  // console.log("imdbID = ", id);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(id));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // return () => {
    //   dispatch(actions.removeSelectedMovie());
    // };
  }, [dispatch, id]);
  return (
    <>
      <Navbar Functionality={Search}></Navbar>

      {Object.keys(data).length === 0 || loading === true ? (
        <div
          className="fs-1 text-light text-center"
          style={{ height: "800px" }}
        >
          <div className="position-absolute top-50 start-50 translate-middle">
            <FallingLines width="110" color="#DC3545" />
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid text-light movie-data movie-det">
            <div className="movie-background m-0 p-5"></div>
            <div className="row p-5 movie-foreground">
              <div className="col-lg-9 col-md-6 ">
                <div className="row">
                  <h1 className="">{data.Title}</h1>
                </div>
                <div className="row mt-2 text-secondary">
                  <div className="col-sm-3">
                    IMDB Rating
                    <FontAwesomeIcon
                      className="mx-2 text-warning"
                      icon={faStar}
                    />
                    :<span className="mx-1">{data.imdbRating}</span>
                  </div>
                  <div className="col-sm-3 ">
                    IMDB Votes
                    <FontAwesomeIcon
                      className="mx-2 text-light"
                      icon={faThumbsUp}
                    />
                    :<span className="mx-1">{data.imdbVotes}</span>
                  </div>
                  <div className="col-sm-3">
                    Runtime
                    <FontAwesomeIcon
                      className="mx-2 text-light"
                      icon={faFilm}
                    />
                    :<span className="mx-1">{data.Runtime}</span>
                  </div>
                  <div className="col-sm-3">
                    Year<i className="mx-2 bi bi-calendar-event text-light"></i>
                    :<span className="mx-1">{data.Year}</span>
                  </div>
                </div>
                <div className="row mt-4 px-2 fs-5">{data.Plot}</div>
                <div className="row mt-5">
                  <div className="col-3">Director</div>
                  <div className="col-4 text-secondary">{data.Director}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">Stars</div>
                  <div className="col-4 text-secondary">{data.Actors}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">Genres</div>
                  <div className="col-4 text-secondary">{data.Genre}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">Languages</div>
                  <div className="col-4 text-secondary">{data.Language}</div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">Awards</div>
                  <div className="col-4 text-secondary">{data.Awards}</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  my-auto text-end">
                <img
                  src={data.Poster}
                  style={{ width: "100%" }}
                  alt="movie"
                ></img>
              </div>
            </div>
          </div>
          <MovieListing timer={0} />
        </>
      )}
    </>
  );
};

export default MovieDetails;
