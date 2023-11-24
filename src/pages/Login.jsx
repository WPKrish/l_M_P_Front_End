import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assest/login.webp";
import "../styles/Login.css";
import { clearAllState, saveState } from "../util/StorageManager";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import { defaultConfig } from "../constant/App.constant";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => clearAllState(), []);

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
      const response = await axios.post(
        "http://localhost:8080/user/login",
        credentials
      );

      const user = response?.data?.user;

      switch (response?.data?.message) {
        case "Login Success as Admin":
          saveState("role", user?.jobRole?.role);
          saveState("roleID", user?.jobRole?.roleID);
          saveState("name", user?.name);
          saveState("employeeID", user?.employeeID);
          saveState("username", user?.username);
          navigate("/admin");
          break;
        case "Login Success as Supervisor":
          saveState("role", user?.jobRole?.role);
          saveState("roleID", user?.jobRole?.roleID);
          saveState("name", user?.name);
          saveState("employeeID", user?.employeeID);
          saveState("username", user?.username);
          navigate("/supervisor");
          break;
        case "Login Success as Labor":
          saveState("role", user?.jobRole?.role);
          saveState("roleID", user?.jobRole?.roleID);
          saveState("name", user?.name);
          saveState("employeeID", user?.employeeID);
          saveState("username", user?.username);
          navigate("/labor");
          break;
        case "Requested User not exist":
          Swal.fire({
            ...defaultConfig,
            title:
              "The User you entered isn't connected to an account. \n\nPlease try aggain",
          });

          break;
        default:
          Swal.fire({
            ...defaultConfig,
            title:
              "The Username and Password you entered isn't match. \n\nPlease try aggain",
          });
      }
    } catch (err) {
      console.error("Error:", err);
      if (err.response.status === 404) {
        Swal.fire({
          ...defaultConfig,
          title: err.response.data,
        });
      } else if (err.response.status === 409) {
        Swal.fire({
          ...defaultConfig,
          title: err.response.data,
        });
      } else {
        Swal.fire({
          ...defaultConfig,
          title: "The Username you entered is wrong",
        });
      }
    }
  };

  return (
    <div className="loginContainer">
      <div className="logDivStyle" style={{}}>
        <div style={{ display: "flex", width: "100%" }}>
          <div className="logLeftDivStyle" style={{}}>
            <img src={LoginImg} alt="LoginImage" className="loginImageStyle" />
          </div>

          <div className="logRightDivStyle">
            <form className="loginFormStyle">
              <fieldset style={{ width: "90%" }}>
                <legend className="login">Login</legend>

                <div>
                  <label className="info" htmlFor="username">
                    Username
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  maxLength="20"
                  placeholder="Enter Username"
                  value={credentials.username}
                  onChange={handleInputChange}
                />
                <br />
                <div>
                  <label className="info" htmlFor="password">
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
                </div>

                <p>
                  <small id="employeeIDHelp" className="form-text text-muted">
                    We'll never share your details with anyone else.
                  </small>
                  <br></br>
                </p>

                <button
                  type="submit"
                  className="lbutton"
                  onClick={handleButtonClick}
                  disabled={!credentials.username || !credentials.password}
                  style={{
                    backgroundColor:
                      !credentials.username || !credentials.password
                        ? "#ccc" // Background color when disabled
                        : "#000", // Default background color
                    color: "#fff", // Text color
                  }}
                >
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
