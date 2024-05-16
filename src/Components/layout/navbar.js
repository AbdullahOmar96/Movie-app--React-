// import React from "react";
// import Movielist from "./../../pages/movielist";
// import watchlist from "./../../pages/watchlist";
import { useLocation } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown'; 
import DropdownButton from 'react-bootstrap/DropdownButton'
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { useSelector , useDispatch, } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useContext} from "react"
import { LangContext } from "../../Context/LangContext";
export default function Navbar() {
  const location = useLocation();
  const movieReg = location.state?.movieReg.name;


const movieArr = useSelector(state => state.movie.watchList)
const {lang , setLang} = useContext(LangContext)



  const activelink = "text-dark font-weight-bold text-decoration-none  "; //here if it's active link
  const normallink = "text-black " ; 
  const getDirection = () => {
    return lang === 'ar' ? 'rtl' : 'ltr';
  };                        //void
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light" dir={getDirection()}>
  <div className="container-fluid">
    <div className="navbar-brand">Movies App</div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({isActive, isPending}) => {
              return `nav-link ${
                isActive ? activelink : normallink
              }`
            }}> 
            Movie list
          </NavLink>
        </li>
        <li className="nav-item" >
          <NavLink 
            to="/watch-list"
            className={({isActive, isPending}) => {
              return `nav-link position-relative ${
                isActive ? activelink : normallink
              }`
            }}>
            {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
            Watch list
            {/* <span  className="badge badge-dark ml-1">{movieArr.length}</span>
             */}
             <span class="position-absolute top-22 start-60 translate-middle badge rounded-pill badge-danger">
             {movieArr.length}
    <span class="visually-hidden">unread messages</span>
  </span>
          </NavLink>
        </li>
      </ul>
    <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Dropdown> 
        <Dropdown.Toggle variant="success"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>{lang}

        </Dropdown.Toggle> 
        <Dropdown.Menu> 
          <Dropdown.Item name="en"  onClick={() => setLang("en")}> 
            En
            
          </Dropdown.Item> 
          <Dropdown.Item name="ar"  onClick={() => setLang("ar")}> 
            Ar
            
          </Dropdown.Item> 
          {/* <Dropdown.Item href="#"> 
            Logout 
          </Dropdown.Item>  */}
        </Dropdown.Menu> 
      </Dropdown>
        </li>
      </ul>
          
          {/* {`Language is ${lang}`} */}


      <ul className="navbar-nav ms-auto"> {/* ms-auto class pushes items to the right */}
        <li className="nav-item">
          <NavLink
            to="/reg"
            className={({isActive, isPending}) => {
              return `nav-link ${
                isActive ? activelink : normallink
              }`
            }}>
              {  movieReg ? `hello ${movieReg}`  : "Registration"} 

              {/* {lang === "en" ? "Registration" : "التسجيل"} */}

            
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
