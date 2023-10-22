import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginImg from "../assest/login.webp";

const Login = () => {
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmployeeIDChange = (event) => {
    setEmployeeID(event.target.value);
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    console.log(localStorage.getItem("a"));

    try {
      const response = await axios.post("http://localhost:8080/login", {
        employeeID: employeeID,
        password: password,
      });

      if (response.data.message === "Login Success as Admin") {
        navigate("/admin");
      } else if (response.data.message === "Login Success as Supervisor") {
        navigate("/supervisor");
      } else if (response.data.message === "Login Success as Labor") {
        navigate("/Labor");
      } else if (response.data.message === "User not exits") {
        alert("User Not exit");
      } else {
        alert("Employee Nomber and Password Not match");
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Error:", error);
    }
  };


  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          {/* Left side with image */}
          <div className="col-md-6">
            <img
              src={LoginImg}
              alt="LoginImage"
              className="img-fluid"
              style={{ filter: "brightness(50%)" }} // Adjust the percentage as needed
            />
          </div>

          {/* Right side with login form */}
          <div className="col-md-6">
            <form>
              <fieldset>
                <legend>Login</legend>

                <div className="form-group">
                  <label
                    htmlFor="exampleInputemployeeID1"
                    className="form-label mt-4"
                  >
                    Employee ID
                  </label>
                  
                  <input
                    type="id"
                    className="form-control"
                    id="exampleInputEmployeeID"
                    aria-describedby="employeeIDHelp"
                    placeholder="Enter Employee ID"
                    value={employeeID}
                    onChange={handleEmployeeIDChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label mt-4"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    autoComplete="off"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                  <small id="employeeIDHelp" className="form-text text-muted">
                    We'll never share your details with anyone else.
                  </small>
                </div>

                <p></p>
                <button
                  type="login"
                  className="btn btn-primary"
                  onClick={handleButtonClick}
                >
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
