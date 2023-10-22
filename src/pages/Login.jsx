import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assest/login.webp";
// import "./Login.css"; // Import your custom CSS file for styling

const Login = () => {
  const [credentials, setCredentials] = useState({
    employeeID: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", credentials);

      switch (response.data.message) {
        case "Login Success as Admin":
          navigate("/admin");
          break;
        case "Login Success as Supervisor":
          navigate("/supervisor");
          break;
        case "Login Success as Labor":
          navigate("/Labor");
          break;
        case "User not exists":
          alert("User does not exist");
          break;
        default:
          alert("Employee Number and Password do not match");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 left-side">
          <img
            src={LoginImg}
            alt="LoginImage"
            className="img-fluid"
            style={{ filter: "brightness(50%)" }}
          />
        </div>
        <div className="col-md-6 right-side">
          <form>
            <fieldset>
              <legend>Login</legend>

              <div className="form-group">
                <label htmlFor="employeeID" className="form-label mt-4">
                  Employee ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employeeID"
                  name="employeeID"
                  placeholder="Enter Employee ID"
                  value={credentials.employeeID}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label mt-4">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  autoComplete="off"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                <small id="employeeIDHelp" className="form-text text-muted">
                  We'll never share your details with anyone else.
                </small>
              </div>

              <button
                type="submit"
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
  );
};

export default Login;
