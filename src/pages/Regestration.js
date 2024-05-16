// In register page with the following ﬁelds. [Native]
// ● Email address [ required - email format ] ( regex )
// ● Name [required]
// ● Username [required - contains no spaces (extra) ]
// ● Password [ required - password length not less than 8
// characters , contains at least one lowercase , one
// uppercase ,  at least one digit and special character [
// example : *@%$# ] ] ( regex )
// ● Example for valid Password : P@ssword1234
// ● Conﬁrm password : [required - matches previous
// password ] [Bonus]

import { useNavigate } from "react-router-dom";

import "./style/Regester.css";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Registration() {
  const navigate = useNavigate();

  const [movieReg, setmovieReg] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    name: null,
    username: null,
    password: null,
    confirmPassword: null,
  });

  const handelFormChange = (e) => {
    if (e.target.name === "email") {
      setmovieReg({
        ...movieReg,
        email: e.target.value,
      });

      setErrors({
        ...errors,
        email:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            e.target.value
          )
            ? null
            : "Invalid email",
      });
    }
    if (e.target.name === "name") {
      setmovieReg({
        ...movieReg,
        name: e.target.value,
      });
      setErrors({
        ...errors,
        name: /^[a-zA-Z]+$/.test(e.target.value)
          ? null
          : "Name should contain only letters",
      });
    }
    if (e.target.name === "username") {
      setmovieReg({
        ...movieReg,
        username: e.target.value,
      });

      setErrors({
        ...errors,
        username: /^[a-zA-Z0-9]+$/.test(e.target.value)
          ? null
          : "Username should contain only letters and numbers",
      });
    }
    if (e.target.name === "password") {
      setmovieReg({
        ...movieReg,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value)
          ? null
          : "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
      });
    }
    if (e.target.name === "confirmPassword") {
      setmovieReg({
        ...movieReg,
        confirmPassword: e.target.value,
      });
      //checking the match of passwords
      if (e.target.value !== movieReg.password) {
        setErrors({
          ...errors,
          confirmPassword: "Passwords do not match",
        });
      } else {
        setErrors({
          ...errors,
          confirmPassword: "matched",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`//localhost:3000`);
    navigate(`//localhost:3000`, { state: { movieReg: movieReg} });
  };


  return (
    <form onSubmit={handleSubmit} action="../pages/movielist.js">
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          value={movieReg.name}
          name="name"
          onChange={handelFormChange}
        />
        {errors.name && <p className="form-text text-danger">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          value={movieReg.email}
          name="email"
          onChange={handelFormChange}
        />
        {errors.email && (
          <p className="form-text text-danger">{errors.email}</p>
        )}
      </div>

      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          value={movieReg.username}
          name="username"
          onChange={handelFormChange}
        />
        {errors.username && (
          <p className="form-text text-danger">{errors.username}</p>
        )}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={movieReg.password}
          name="password"
          onChange={handelFormChange}
        />
        {errors.password && (
          <p className="form-text text-danger">{errors.password}</p>
        )}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          className="form-control"
          type="password"
          value={movieReg.confirmPassword}
          name="confirmPassword"
          onChange={handelFormChange}
        />
        {errors.confirmPassword != "matched" ? (
          <p className="form-text text-danger">{errors.confirmPassword}</p>
        ) : (
          <p className=" text-success">{errors.confirmPassword}</p>
        )}
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">
        Register
      </button>
      {/* // other fields */}

      {/* <button 
    className="btn btn-primary"
    type="submit">
    submit
  </button> */}
    </form>
  );
}
export default Registration;

// export default Registration
