import axios from "axios";
import { users } from "../../assets/data";

import Movieinfo from "./movieinfo";
import { useEffect, useState } from "react";
import {addMovie, removeMovie}  from "../../store/slice/WatchList.js";
import {useContext} from "react"
import { LangContext } from "../../Context/LangContext";  

function MovielistOld() {
  //first define state that will hold all data
  const [moviesArr, setmoviesArr] = useState([]); 
  const [isFavorite, setIsFavorite] = useState(false);
const {lang , setLang} = useContext(LangContext)
  // Initial value empty array to update it with API


  
  /////////////////////////////// old way
  //   return (
  //     <div>
  //       <ul>
  //         {moviesArr.map((user) => {
  //           return (
  //             <li>{user.age}</li> //with every itrate show user.age for all object in array
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  useEffect(() => {
    // const apiKey = "c8736c80226ced514fd1f68a69e4a278" ;
   // https://api.themoviedb.org/3/movie/popular?api_key={apiKey}&language=ar
    if (lang =="ar") {
      
   axios
   .get(`https://api.themoviedb.org/3/movie/popular?api_key=c8736c80226ced514fd1f68a69e4a278&language=ar`,{
    baseURL : process.env.REACT_APP_BASE_URL,
     params:{},
     headers: {
       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODczNmM4MDIyNmNlZDUxNGZkMWY2OGE2OWU0YTI3OCIsInN1YiI6IjY1ZjI3ZGU1MzU4MThmMDE2NWQwN2E4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2n-Di9anyd_yFSNj5z3Y154hGCfyLF5dJqZP35HWi3E'
     },

   })
   .then((res) => {setmoviesArr(res.data.results)})//take the results and put them into
   // .then(()=>console.log(moviesArr))
   // .then((res) => {console.log(res.data.results)})

   .catch((err) => {console.log(err)});
    } else {
      
   axios
   .get(`https://api.themoviedb.org/3/movie/popular`,{
     params:{},
     headers: {
       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODczNmM4MDIyNmNlZDUxNGZkMWY2OGE2OWU0YTI3OCIsInN1YiI6IjY1ZjI3ZGU1MzU4MThmMDE2NWQwN2E4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2n-Di9anyd_yFSNj5z3Y154hGCfyLF5dJqZP35HWi3E'
     },

   })
   .then((res) => {setmoviesArr(res.data.results)})//take the results and put them into
   // .then(()=>console.log(moviesArr))
   // .then((res) => {console.log(res.data.results)})

   .catch((err) => {console.log(err)});
    }
  }, [lang]);

  return (
    //this div below just used for responsiveness with each screen
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {moviesArr.map((movie) => {
        return (

          <div className="col" key={movie.id}>
            {/* (user) here mean that each loop it will send object(data) from array to the userinfo to handle it to be like a card of info  */}
            <Movieinfo movie={movie} />
          </div>
        );
      })}
    </div>
  //  <></>
  );
}

export default MovielistOld;

// in line 32 i'm calling for child (userCard ) in userlist(parent)
