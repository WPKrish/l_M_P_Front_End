// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LoginImg from "../assest/login.webp";
// import "../styles/Login.css";
// import { clearAllState, saveState } from "../util/StorageManager";

// import Swal from "sweetalert2";
// import "../styles/SweeAlert2.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     employeeID: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => clearAllState(), []);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCredentials({
//       ...credentials,
//       [name]: value,
//     });
//   };

//   const handleButtonClick = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         // "http://localhost:8080/login",
//         "http://localhost:8080/user/login",
//         credentials
//       );

//       // let role = "";

//       console.log("Response : ", response.data);

//       const user = response?.data?.user;

//       console.log("User : ", user);

//       switch (response?.data?.message) {
//         case "Login Success as Admin":
//           saveState("role", user?.jobRole?.role);
//           saveState("roleID", user?.jobRole?.roleID);
//           saveState("name", user?.name);
//           saveState("employeeID", user?.employeeID);
//           navigate("/admin");
//           break;
//         case "Login Success as Supervisor":
//           saveState("role", user?.jobRole?.role);
//           saveState("roleID", user?.jobRole?.roleID);
//           saveState("name", user?.name);
//           saveState("employeeID", user?.employeeID);
//           navigate("/supervisor");
//           break;
//         case "Login Success as Labor":
//           saveState("role", user?.jobRole?.role);
//           saveState("roleID", user?.jobRole?.roleID);
//           saveState("name", user?.name);
//           saveState("employeeID", user?.employeeID);
//           navigate("/labor");
//           break;
//         case "Requested User not exist":
//           Swal.fire({
//             icon: "error",
//             title:
//               "The User you entered isn't connected to an account. \n\nPlease try aggain",
//             showConfirmButton: true,
//             timer: 11500,
//             customClass: {
//               popup: "custom-modal-size",
//             },
//           });

//           break;
//         default:
//           Swal.fire({
//             icon: "error",
//             title:
//               "The Employee ID and Password you entered isn't connected to an account. \n\nPlease try aggain",
//             showConfirmButton: true,
//             timer: 11500,
//             customClass: {
//               popup: "custom-modal-size",
//             },
//           });
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       if (err.response.status === 404) {
//         console.log(err.response);
//         alert(err.response.data);
//       } else if (err.response.status === 409) {
//         alert(err.response.data);
//       } else {
//         Swal.fire({
//           icon: "error",
//           title:
//             "The Employee ID you entered isn't a number\n\nPlease Enter Number value for Employee ID",
//           showConfirmButton: true,
//           timer: 11500,
//           customClass: {
//             popup: "custom-modal-size",
//           },
          
//         });
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         // padding: "5px",
//         borderRadius: "5px",
//         backgroundColor: "#ECEFF1",
//         margin: "60px",
//         height: "calc(100vh - 240px)",
//         display: "flex", alignItems: "center", justifyContent: "center"
//       }}
//     >
//       <div className="container login-container">
//         <div className="form-group row">
//           <div className="col-md-6 left-side" >
//             <img
//               src={LoginImg}
//               alt="LoginImage"
//               className="img-fluid"
//               style={{
//                 filter: "brightness(50%)",
//                 // maxWidth: "100%",
//                 // maxHeight: "100%",
//                 // height: "calc(100vh - 410px)",
//                 width: "100%",
//                 borderRadius: "5px",
//                 // marginTop: "40px",
//                 // marginBottom: "30px",
//                 // objectFit: "cover",
                
//               }}
//             />
//           </div>

//           <div className="col-md-6 right-side">
//             <form>
//               <fieldset>
//                 <legend>Login</legend>

//                 <div className="form-group row">
//                   <label htmlFor="employeeID" className="form-label mt-4">
//                     Employee ID
//                   </label>
//                   <br></br>
//                   <br></br>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="employeeID"
//                     name="employeeID"
//                     maxLength="6"
//                     placeholder="Enter Employee ID"
//                     value={credentials.employeeID}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="form-group row">
//                   <label htmlFor="password" className="form-label mt-4">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     // maxLength="10"
//                     autoComplete="off"
//                     value={credentials.password}
//                     onChange={handleInputChange}
//                     placeholder="Password"
//                   />
//                 </div>

//                 <p>
//                   <small id="employeeIDHelp" className="form-text text-muted">
//                     We'll never share your details with anyone else.
//                   </small>
//                   <br></br>
//                 </p>

//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   onClick={handleButtonClick}
//                   disabled={!credentials.employeeID || !credentials.password}
//                   style={{
//                     backgroundColor:
//                       !credentials.employeeID || !credentials.password
//                         ? "#ccc" // Background color when disabled
//                         : "#000", // Default background color
//                     color: "#fff", // Text color
//                   }}
//                 >
//                   Login
//                 </button>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assest/login.webp";
import "../styles/Login.css";
import { clearAllState, saveState } from "../util/StorageManager";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

// import "../styles/ButtonsInProfile.css";

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
        // "http://localhost:8080/login",
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
            title: "The User you entered isn't connected to an account. \n\nPlease try aggain",
          });

          break;
        default:
          Swal.fire({
            ...defaultConfig,
            title: "The Username and Password you entered isn't match. \n\nPlease try aggain",
          });
      }
    } catch (err) {
      console.error("Error:", err);
      if (err.response.status === 404) {
        // console.log(err.response);
        // alert(err.response.data);
        Swal.fire({
          ...defaultConfig,
          title: err.response.data,
        });
      } else if (err.response.status === 409) {
        // alert(err.response.data);
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
    <div
      style={{
        border: "1px solid #ccc",
        // padding: "5px",
        borderRadius: "5px",
        backgroundColor: "#ECEFF1",
        margin:"60px",
        height: "calc(100vh - 240px)",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}
    >
      <div className="logDivStyle" style={{}}  >
        <div style={{display:"flex"}}>
          <div className="logLeftDivStyle" style={{}}>
            <img
              src={LoginImg}
              alt="LoginImage"
              // className="img-fluid"
              style={{
                filter: "brightness(50%)",
                width: "100%",
                height:"100%",
                borderRadius: "5px",              
              }}
            />
          </div>

          <div className="logRightDivStyle" style={{}}>
            <form style={{width:"100%"}}>
              <fieldset>
                <legend>Login</legend>
                <br/><br/>

                <div >
                  <label htmlFor="username" >
                    Username
                  </label>
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
                </div>
                <br/>
                <div>
                  <label htmlFor="password" >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    // maxLength="10"
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
