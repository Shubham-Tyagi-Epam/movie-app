import React, { useEffect } from "react";
import movieAPI from "../../common/APIs/movieAPI";
import APIKey from "../../common/APIs/movieAPIKey";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  actions,
  fetchAsyncAllMovieDetails,
  fetchAsyncMovies,
} from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";
import Header from "../Header/Header";
import Search from "../Header/Search/Search";
import User from "../Header/User/User";
const Home = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  let srchKey = searchParams.get("search");
  function searchKey() {
    console.log(" search text from params = " + searchParams.get("search"));
    srchKey = searchParams.get("search");
    dispatch(fetchAsyncMovies(srchKey));
  }
  useEffect(() => {
    // fetchMovies();
    console.log("---- initial home : " + srchKey);
    dispatch(fetchAsyncMovies(srchKey));
    // dispatch(fetchAsyncAllMovieDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // function dispatchToReducers(){
  //   dispatch
  // }
  // apikey=${APIKey}&s=Harry&type=movie
  // https://www.omdbapi.com/?apikey=b0f05d8e&s=Harry&type=movie
  // let response;
  // function fetchMovies() {
  //   movieAPI
  //     .get(`?apikey=${APIKey}&s=Harry&type=movie`)
  //     .then((data) => {
  //       console.log("in");
  //       // console.log(data.data.data);
  //       response = data;
  //       console.log(data);
  //       dispatch(actions.addMovies(response.data));
  //       // dispatch(actions.addMovieDetails());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  console.log(Search);
  return (
    <div>
      <Header searchKey={searchKey} Functionality={User}></Header>
      <MovieListing timer={2000}></MovieListing>
    </div>
  );
};

export default Home;
