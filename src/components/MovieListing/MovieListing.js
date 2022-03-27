import React, { useEffect, useState } from "react";
import {
  getAllMovies,
  getAllMoviesDetails,
  fetchAsyncAllMovieDetails,
  getMoviesDone,
  getAllMoviesDetailsDone,
} from "../../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import MovieListingSettings from "../MovieListingSettings/MovieListing";
import { FallingLines } from "react-loader-spinner";

const MovieListing = ({ timer }) => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const moviesDone = useSelector(getMoviesDone);
  const allMoviesDetailsDone = useSelector(getAllMoviesDetailsDone);
  let renderMovies = "";
  const [sortParam, setSortParam] = useState(
    localStorage.getItem("sortType") || "Year"
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (moviesDone > 0) {
      console.log("not Null");
      console.log(moviesDone);
      dispatch(fetchAsyncAllMovieDetails());
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesDone]);

  const allMoviesDetails = useSelector(getAllMoviesDetails);
  // console.log("allMoviesDetails");
  // console.log(allMoviesDetails);
  // console.log(allMoviesDetailsDone);

  // console.log("movies =  ");
  // console.log(movies);

  function compareRating(a, b) {
    if (Number(a.imdbRating) < Number(b.imdbRating)) return 1;
    return -1;
  }

  function compareReleaseYear(a, b) {
    if (Number(a.Year) < Number(b.Year)) return 1;
    return -1;
  }

  function changeSortParam(sortVar) {
    setSortParam(sortVar);
    localStorage.setItem("sortType", sortVar);
    console.log("sortParam = " + sortParam);
  }

  let arr;
  if (allMoviesDetailsDone > 0) {
    arr = allMoviesDetails.slice();
    if (sortParam === "Year") arr.sort(compareReleaseYear);
    else arr.sort(compareRating);
    console.log(arr);
    // console.log("===========");
    // console.log(allMoviesDetails[0].imdbRating);
  }
  console.log(movies);
  console.log(allMoviesDetails);
  console.log("all Movies Details Done : " + allMoviesDetailsDone);
  console.log(movies.Response);
  console.log(allMoviesDetails);
  renderMovies =
    allMoviesDetailsDone > 0 &&
    movies.Response !== "False" &&
    loading === false ? (
      <>
        <MovieListingSettings
          totalMovies={allMoviesDetails.length}
          changeSort={changeSortParam}
          sortParam={sortParam}
        />
        <div className="container-fluid">
          <div className="row">
            {arr.map((movie, index) => (
              <div
                key={index}
                data={movie}
                className="col-lg-4 col-xl-3 px-4 col-md-6 col-sm-6 mb-4 d-flex align-self-stretch position-relative"
              >
                <MovieCard data={movie}></MovieCard>
              </div>
            ))}
          </div>
        </div>
      </>
    ) : movies.Error === "Movie not found!" && loading === false ? (
      <div>
        <h1 className="text-light text-center">Movies Not Found</h1>
      </div>
    ) : (
      <div className="text-center mt-5">
        <FallingLines width="110" color="#DC3545" />
      </div>
    );
  console.log("Movies are : ");
  console.log(movies);
  return <div className="">{renderMovies}</div>;
};

export default MovieListing;
