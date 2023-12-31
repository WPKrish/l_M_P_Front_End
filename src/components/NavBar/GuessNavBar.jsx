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

  // return (
  //   <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{height:"70px", backgroundColor:"black"}}>
  //     <div className="container-fluid">
  //       <a className="nav-brand" href="/">
  //         M Labouring
  //       </a>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarColor01"
  //         aria-controls="navbarColor01"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarColor01">
  //         <ul className="navbar-nav m-auto">
  //           <NavItem onClick={homeNavigationHandler} text="Home" />
  //           <NavItem link="/about" text="About Us" />
  //           <NavItem link="/contact" text="Contact Us" />
  //         </ul>
  //         <LoginForm
  //           onLoginClick={handleLoginClick}
  //           onLogoutClick={handleLogoutClick}
  //         />
  //       </div>
  //     </div>
  //   </nav>
  // );

  return (
    <nav className="mainNavdiv">
      <div className="firstNavdiv">
        <a className="nav-brand" href="/">
          M Labouring
        </a>
      </div>
      <div className="secondNavdiv">
        <div className="sectionDiv">
          <NavItem onClick={homeNavigationHandler} text="Home" />
        </div>
        <div className="sectionDiv">
          <NavItem link="/about" text="About Us" />
        </div>
        <div className="sectionDiv">
          <NavItem link="/contact" text="Contact Us" />
        </div>
      </div>
      <div className="thirdNavdiv">
        <LoginForm
          onLoginClick={handleLoginClick}
          onLogoutClick={handleLogoutClick}
        /> 
      </div>
    </nav>
  );
};

// const NavItem = ({ link, text, onClick }) => (
//   <li className="nav-item">
//     <NavLink
//       exact
//       to={link}
//       className="nav-link"
//       activeClassName="active-link" // Custom class for active links
//       onClick={onClick}
//     >
//       {text}
//     </NavLink>
//   </li>
// );

const NavItem = ({ link, text, onClick }) => (
  <li className="listStyle">
    <div>
      <NavLink
        exact
        to={link}
        className="active-link"
        //activeClassName="active-link" // Custom class for active links
        onClick={onClick}
      >
        {text}
      </NavLink>
    </div>
  </li>
);

const LoginForm = ({ onLoginClick, onLogoutClick }) => {
  // Check if an employeeID exists in local storage
  const employeeID = localStorage.getItem("employeeID");

  return (
    // <form className="d-flex">
    <form>
      {employeeID ? (
        <button
          className="log"
          // style={{height:"30px"}}
          type="button"
          onClick={onLogoutClick}
        >
          Logout
        </button>
      ) : (
        <button className="log" type="button" onClick={onLoginClick}>
          Login
        </button>
      )}
    </form>
  );
};

export default GuessNavBar;
