import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../../styles/navbar.css"

const GuessNavBar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          L M S
        </a>
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
            <NavItem link="/" text="Home" />
            <NavItem link="/about" text="About Us" />
            <NavItem link="/contact" text="Contact Us" />
          </ul>
          <LoginForm onLoginClick={handleLoginClick} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ link, text }) => (
 <li className="nav-item">
   <NavLink
     exact
     to={link}
     className="nav-link"
     activeClassName="active-link" // Custom class for active links
   >
     {text}
   </NavLink>
 </li>
);

const LoginForm = ({ onLoginClick }) => (
  <form className="d-flex">
    <button
      className="btn btn-secondary my-2 my-sm-0"
      type="button"
      onClick={onLoginClick}
    >
      Login
    </button>
  </form>
);

export default GuessNavBar;
