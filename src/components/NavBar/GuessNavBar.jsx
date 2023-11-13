import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import { loadState } from "../../util/StorageManager";
import { APP_ROLE } from "../../constant/App.constant";

const GuessNavBar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  console.log("IS LOGIN : ", isLogin);

  const handleLoginClick = () => {
    const isEmployeeID = !!loadState("employeeID");
    console.log("IS Employee ID", isEmployeeID);
    if (isEmployeeID) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    // Navigate to the login page
    navigate("/login");
  };

  const handleLogoutClick = () => {
    // Handle logoff logic and remove user from local storage
    localStorage.removeItem("employeeID");
    // Use navigate to go to the "/login" route
    navigate("/login");
    // You can also call an `onLogoffClick` function if needed
  };

  // navigate is not working here
  const homeNavigationHandler = () => {
    const isEmployeeID = !!loadState("employeeID");

    const role = loadState("role");

    if (isEmployeeID) {
      if (role === APP_ROLE.ADMIN) {
        // navigate("/admin");
        window.location.href = "/admin";
      } else if (role === APP_ROLE.SUPERVISOR) {
        // navigate("/supervisor")
        window.location.href = "/supervisor";
      } else if (role === APP_ROLE.LABOR) {
        // navigate("/labor")
        window.location.href = "/labor";
      }
    } else {
      window.location.href = "/";
    }
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
            <NavItem onClick={homeNavigationHandler} text="Home" />
            <NavItem link="/about" text="About Us" />
            <NavItem link="/contact" text="Contact Us" />
          </ul>
          <LoginForm
            onLoginClick={handleLoginClick}
            onLogoutClick={handleLogoutClick}
          />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ link, text, onClick }) => (
  <li className="nav-item">
    <NavLink
      exact
      to={link}
      className="nav-link"
      activeClassName="active-link" // Custom class for active links
      onClick={onClick}
    >
      {text}
    </NavLink>
  </li>
);

// const LoginForm = ({ onLoginClick }) => (
//   <form className="d-flex">
//     <button
//       className="btn btn-secondary my-2 my-sm-0"
//       type="button"
//       onClick={onLoginClick}
//     >
//       Login
//     </button>
//   </form>
// );

const LoginForm = ({ onLoginClick, onLogoutClick }) => {
  // Check if an employeeID exists in local storage
  const employeeID = localStorage.getItem("employeeID");
  console.log("EmployeeID", employeeID);

  return (
    <form className="d-flex">
      {employeeID ? (
        <button
          className="btn btn-secondary my-2 my-sm-0"
          type="button"
          onClick={onLogoutClick}
        >
          Logout
        </button>
      ) : (
        <button
          className="btn btn-secondary my-2 my-sm-0"
          type="button"
          onClick={onLoginClick}
        >
          Login
        </button>
      )}
    </form>
  );
};

export default GuessNavBar;
