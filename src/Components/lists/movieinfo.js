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
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../../store/slice/WatchList.js";
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./movieinfo.css"

// movieList
// watchList

function Movieinfo(props) {
  //   console.log(props);
  const movieArr = useSelector((state) => state.movie.watchList);
  let [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  console.log(movieArr);
  const { movie } = props;
  const navigate = useNavigate(); // here it's a hook(Method) from ("react-router-dom")

  return (
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
      onClick={() => navigate(`movie-details/${movie.id}`)}
    >
      Show Details
    </button>
  </div>
  <button
    className="btn position-absolute heart"
    type="button"
    onClick={() => {
      if (isFavorite === false) {
        isFavorite = true;
        dispatch(addMovie({ ...movie }));
      } else {
        isFavorite = false;
        dispatch(removeMovie(movie));
      }
    }}
  >
    <svg
      onClick={() => setIsFavorite(!isFavorite)}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill={`${isFavorite ? "red" : "white"}`}
      className="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
    </svg>
  </button>
</div>  );
}

export default Movieinfo;
