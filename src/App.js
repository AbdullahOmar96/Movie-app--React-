import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movielist from "./pages/movielist";
// import Moviedetails from "./pages/moviedetails";
import Notfound from "./pages/notfound";
// import Watchlist from "./pages/watchlist";
import Navbar from "./Components/layout/navbar";
import Regesterarion from "./pages/Regestration";
import { LangContext } from "./Context/LangContext";
import { useState } from "react";


const Moviedetails = React.lazy(() => import("./pages/moviedetails"));
const Watchlist = React.lazy(() => import("./pages/watchlist"));

function App() {
const [lang, setLang] = useState("en");

  return (
    <BrowserRouter>
      <LangContext.Provider value={{lang , setLang}}>
        <Navbar />
        <div className="container my-5">
          <Suspense fallback={<div>Component is Loading...</div>}>
          <Routes>
          <Route path="reg" element={<Regesterarion />} />

            <Route path="" element={<Movielist />} />
            <Route path="movie-details/:id" element={<Moviedetails />} />
            <Route path="watch-list" element={<Watchlist />} />
            <Route path="reg" element={<Regesterarion />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          </Suspense>
          
        </div>
      </LangContext.Provider>
    </BrowserRouter>
  );
}

export default App;

//I put navbar ubove all Route as nav bar exist in each Route
//my-5   >>> margin top and bottom =5
