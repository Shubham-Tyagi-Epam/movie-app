import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/APIs/movieAPI";
import APIKey from "../../common/APIs/movieAPIKey";

// createAsyncThunk takes two parameter one is a string and the other is a callback function.it is basically a thunk function creator

// The callback function takes 3 args but we are only concerned with the 2 of them for now, the first args is an object with the first value that was passed to the function during dispatch, if we need to pas more than 1 value than combine them in an object and then pass
// Second param is an object containing all the parameter that are normally sent to a normal redux functions, for now we are only concerned with getState(), this returns the current state of the store

const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (arg, { getState }) => {
    // console.log("======== Create Thunk function =========");
    // console.log("=== args ===");
    // console.log(typeof arg);
    const movieText = arg || "Harry";
    const response = await movieAPI.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

const fetchAsyncMovieDetails = createAsyncThunk(
  "movies/fetchAsyncMovieDetails",
  async (id) => {
    let response = await movieAPI
      .get(`?apikey=${APIKey}&i=${id}&Plot=full`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const fetchAsyncAllMovieDetails = createAsyncThunk(
  "movies/fetchAsyncAllMovieDetails",
  async (args, { getState }) => {
    // console.log("======== Create Thunk function =========");
    let response = [];
    // response.push("hedede");
    // response.push("hedede");
    let movies = getState().moviesReducer.movies;
    // console.log(" ==== movies ====");
    // console.log(movies.Search[0].imdbID);
    // console.log(movies);
    // await Promise.all(

    movies.Search.map(async (movie) => {
      let singleResponse;
      singleResponse = await movieAPI
        .get(`?apikey=${APIKey}&i=${movie.imdbID}&Plot=full`)
        .catch((err) => {
          console.log(err);
          return Promise.reject();
        });
      // response.push(singleResponse.data);
      // console.log(singleResponse.data);
      let data = singleResponse.data;
      console.log(data);
      response.push(data);
    });
    // );
    // console.log(response);
    let singleResponse = await movieAPI.get(
      `?apikey=${APIKey}&i=${movies.Search[0].imdbID}&Plot=full`
    ); // this statement is not used, but still yet to figure out why not using this is causing the code to break
    // console.log("");
    console.log(response);
    return response;
  }
);

const initialState = {
  movies: {}, // this gives only some details of all the found movies
  selectedMovie: {},
  // this variable give the value of current movie details , when we route to that movie page
  allMovieDetails: {},
  // this variable is for all movie details
  allMoviesDetailsDone: 0, // this store variable signifies that all details of the moies have been fetched or not.
  moviesDone: 0, // this movie details signifies whether or not the movie details
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
    addMovieDetails: (state, action) => {
      state.allMovieDetails = action.payload;
    },
    setInitial: (state, action) => {
      state = initialState;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succesfully");
      state.movies = payload;
      console.log(state.movies);
      state.moviesDone += 1;
      // state.allMoviesDetailsDone += 1;
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMovieDetails.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      state.selectedMovie = payload;
    },
    [fetchAsyncAllMovieDetails.pending]: () => {
      console.log("=== Pending all det ====");
    },
    [fetchAsyncAllMovieDetails.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled All");
      console.log("------ state.allMovieDetails =====");
      console.log(state.allMovieDetails);
      console.log(payload);
      state.allMovieDetails = payload;
      console.log(state.allMovieDetails);
      state.allMoviesDetailsDone += 1;
      // state.moviesDone = false;
    },
    [fetchAsyncAllMovieDetails.rejected]: (err, err1) => {
      console.log("=== Rejected ===");
      console.log(err, err1);
    },
  },
});

export const actions = movieSlice.actions;
export const getAllMovies = (state) => {
  console.log(state);
  return state.moviesReducer.movies;
};
export const getMovieDetails = (state) => {
  console.log("get movie : ");
  console.log(state);
  return state.moviesReducer.selectedMovie;
};
export const getAllMoviesDetails = (state) => {
  return state.moviesReducer.allMovieDetails;
};
export const getMoviesDone = (state) => {
  console.log("get Movies done");
  console.log(state.moviesReducer.moviesDone);
  console.log(state.moviesReducer.allMoviesDetailsDone);
  return state.moviesReducer.moviesDone;
};
export const getAllMoviesDetailsDone = (state) => {
  return state.moviesReducer.allMoviesDetailsDone;
};

export default movieSlice.reducer;
export { fetchAsyncMovies, fetchAsyncMovieDetails, fetchAsyncAllMovieDetails };
