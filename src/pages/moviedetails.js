// import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Moviedetails() {
  const [movDetails, setmovDetails] = useState({});
  const params = useParams(); //here i'm using params just only to can get the id sent in the URL
  // console.log(params)                 // when user click in one card (view detail) id will sent in url and i can
  //catch it by using params
  //here i'm using useEffect as when user click and go to this page (moviedetails)
  //he already sent me (id) in params ,so i can this (id) to get the data related to this (id)
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        params: {},
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODczNmM4MDIyNmNlZDUxNGZkMWY2OGE2OWU0YTI3OCIsInN1YiI6IjY1ZjI3ZGU1MzU4MThmMDE2NWQwN2E4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2n-Di9anyd_yFSNj5z3Y154hGCfyLF5dJqZP35HWi3E",
        },
      }) //get data that have id:
      .then((res) => {
        setmovDetails(res.data);
      })
      .catch(() => {});
  });

  return (
    <>
      <div>
        <h1>{/* {"{"}movDetails.title{"}"} */}</h1>

        <p className="card-text"></p>
        <section>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      style={{ borderRadius: 20, left: 100 }}
                      src={`https://image.tmdb.org/t/p/w500/${movDetails.poster_path}`}
                      className="card-img-top"
                      alt={movDetails.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {/* {"{"}movDetails.title{"}"} */}
                        Title:{" "}
                        {movDetails.title ? movDetails.title : "Loading..."}
                      </h5>
                      <p className="card-text">
                        release Date :{" "}
                        {movDetails.release_date
                          ? movDetails.release_date
                          : "Loading..."}
                        {/* {movDetails.release_date} */}
                      </p>
                      <p className="card-text">
                        Vote Average :{" "}
                        {movDetails.vote_average
                          ? movDetails.vote_average / 2
                          : "Loading..."}
                        /10
                        {/* // {movDetails.vote_average} */}
                      </p>
                      <p className="card-text">
                        popularity :{" "}
                        {movDetails.popularity
                          ? movDetails.popularity
                          : "Loading..."}
                      </p>
                      <p className="card-text">
                        Vote Average :{" "}
                        {movDetails.vote_average
                          ? movDetails.vote_average
                          : "Loading..."}
                      </p>
                      <p className="card-text">
                        Vote Count :{" "}
                        {movDetails.vote_count
                          ? movDetails.vote_count
                          : "Loading..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1>Description</h1>
            <div className="col-md-6">
              <div className="card mb-3"> {movDetails.overview}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
