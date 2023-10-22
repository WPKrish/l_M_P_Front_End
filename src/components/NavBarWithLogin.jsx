import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarWithLogin = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          LSS
        </a>
        {/* <p className="navbar-brand" href="/">
          L<small style={{fontSize:"10px"}}>abor </small>S<small style={{fontSize:"10px"}}>alary </small>S<small style={{fontSize:"10px"}}>ystem </small>
        </p> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <button className="btn btn-secondary my-2 my-sm-0" type="login">
              Login
            </button>
          </form> */}
          <form className="d-flex">
            <button
              className="btn btn-secondary my-2 my-sm-0"
              type="button" // Ensure it's not a submit button to prevent form submission
              onClick={handleLoginClick} // Call the handleLoginClick function on button click
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBarWithLogin;



