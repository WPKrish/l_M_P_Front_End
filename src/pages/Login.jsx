import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assest/login.webp";
import "../styles/Login.css"
import { clearAllState, saveState } from "../util/StorageManager";

const Login = () => {
  const [credentials, setCredentials] = useState({
    employeeID: "",
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
        // "http://localhost:8080/login",
        "http://localhost:8080/user/login",
        credentials
      );

      // let role = "";

      console.log("Response : ",response.data)

      const user = response?.data?.user;

      console.log("User : ", user)

      switch (response?.data?.message) {
        
        case "Login Success as Admin":
          saveState("role", user?.jobRole?.role)
          saveState("roleID", user?.jobRole?.roleID)
          saveState("name", user?.name)
          saveState("employeeID", user?.employeeID)
          navigate("/admin");
          break;
        case "Login Success as Supervisor":
          saveState("role", user?.jobRole?.role)
          saveState("roleID", user?.jobRole?.roleID)
          saveState("name", user?.name)
          saveState("employeeID", user?.employeeID)
          navigate("/supervisor");
          break;
        case "Login Success as Labor":
          saveState("role", user?.jobRole?.role)
          saveState("roleID", user?.jobRole?.roleID)
          saveState("name", user?.name)
          saveState("employeeID", user?.employeeID)
          navigate("/labor");
          break;
        case "Requested User not exist":
          alert("Requested User not exist");
          break;
        default:
          alert("Employee Number and Password do not match");
      }
    } catch (err) {
      console.error("Error:", err);
      if (err.response.status === 404) {
        console.log(err.response);
        alert(err.response.data);
      } else if (err.response.status === 409) {
        alert(err.response.data);
      }
      else{
        alert("Input an Integer value for employeeID")
      }
    }
  };

  return (
    <div className="container login-container" >
      <div className="form-group row">
        <div className="col-md-6 left-side">
          <img
            src={LoginImg}
            alt="LoginImage"
            className="img-fluid"
            style={{
              filter: "brightness(50%)",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <div className="col-md-6 right-side">
          <form>
            <fieldset>
              <legend>Login</legend>

              <div className="form-group row">
                <label htmlFor="employeeID" className="form-label mt-4">
                  Employee ID
                </label>
                <br></br>
                <br></br>
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

              <div className="form-group row">
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
              </div>

              <p>
                <small id="employeeIDHelp" className="form-text text-muted">
                  We'll never share your details with anyone else.
                </small>
                <br></br>
              </p>

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
