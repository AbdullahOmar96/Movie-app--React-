import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleMinus,
  faHeartCirclePlus,
  faCheckCircle,
  faTimesCircle,
  faHandHoldingHeart,
  faHeartCircleCheck,
  faHeart,
  faHouseMedicalCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
// import { useNavigate , useLocation } from "react-router-dom";
// import { useSelector , useDispatch, } from "react-redux";
// import {addMovie, removeMovie}  from "../store/slice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../store/slice/WatchList";

import "./style/watchlist.css";

export default function Watchlist() {
  // const navigate = useNavigate();
  const movieArr = useSelector((state) => state.movie.watchList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
  
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Map through the array of movies and display them as cards */}
      {movieArr.length === 0 && <p>No movies in your watchlist</p>}
      {movieArr.map((movie) => {
        return (
          <div className="col" key={movie.id}>
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.name}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`//localhost:3000/movie-details/${movie.id}`)
                  }
                >
                  Show Details
                </button>
                <button
                  className="btn position-absolute top-0 end-0 m- hh"
                  onClick={() => {
                    dispatch(removeMovie(movie));
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    class="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
