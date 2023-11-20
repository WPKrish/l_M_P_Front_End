// import { useNavigate } from "react-router-dom";
// import UserProfile from "../components/UserProfile";
// import "../styles/ButtonsInProfile.css";
// import BackButton from "../components/BackButton";

// const Admin = () => {
//   const navigate = useNavigate();

//   const handleAddSupervisorClick = () => {
//     // Navigate to the login page
//     navigate("/register");
//   };

//   const handleUpdateSupervisorClick = () => {
//     // Navigate to the login page
//     navigate("/updateuser");
//   };

//   const handleRemoveSupervisorClick = () => {
//     // Navigate to the login page
//     navigate("/remove");
//   };

//   const handleGetSupervisorsClick = () => {
//     // Navigate to the login page
//     navigate("/getsupervisors");
//   };

//   const handleGetLaborsClick = () => {
//     // Navigate to the login page
//     navigate("/getlabors");
//   };

//   const handleGetTodayAttendanceClick = () => {
//     // Navigate to the login page
//     navigate("/todayattendance");
//   };

//   const handleGetAllLaborsSalaryClick = () => {
//     // Navigate to the login page
//     navigate("/alllaborssalary");
//   };

//   // Get saved data from local storage
//   const userEmployeeID = localStorage.getItem("employeeID");
//   const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
//   const userRole = JSON.parse(localStorage.getItem("role"));

//   return (
//     <>
//       <div>
//         <UserProfile
//           userName={userName}
//           userEmployeeID={userEmployeeID}
//           userRole={userRole}
//         />
//       </div>
//       <div><BackButton/></div>

//       <div className="buttonContainerStyle">
//         <div className="buttonGroupStyle">
//           <button className="buttonStyle" onClick={handleAddSupervisorClick}>
//             Add Supervisor
//           </button>
//           <button className="buttonStyle" onClick={handleUpdateSupervisorClick}>
//             Update Supervisor
//           </button>
//           <button className="buttonStyle" onClick={handleRemoveSupervisorClick}>
//             Remove Supervisor
//           </button>
//         </div>

//         <div className="buttonGroupStyle">
//           <button className="buttonStyle" onClick={handleGetSupervisorsClick}>
//             View All Supervisors
//           </button>
//           <button className="buttonStyle" onClick={handleGetLaborsClick}>
//             View All Labors
//           </button>
//         </div>

//         <div className="buttonGroupStyle">
//           <button
//             className="buttonStyle"
//             onClick={handleGetTodayAttendanceClick}
//           >
//             View Today Labor Attendance
//           </button>

//           <button
//             className="buttonStyle"
//             onClick={handleGetAllLaborsSalaryClick}
//           >
//             View Labor Salary Cost By Month
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Admin;

import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/ButtonsInProfile.css";
import BackButton from "../components/BackButton";
import { useState } from "react";

import AdminImg from "../assest/Admin.jpg";

const Admin = () => {
  const navigate = useNavigate();

  const handleAddSupervisorClick = () => {
    // Navigate to the login page
    navigate("/register");
  };

  const handleUpdateSupervisorClick = () => {
    // Navigate to the login page
    navigate("/updateuser");
  };

  const handleRemoveSupervisorClick = () => {
    // Navigate to the login page
    navigate("/remove");
  };

  const handleGetSupervisorsClick = () => {
    // Navigate to the login page
    navigate("/getsupervisors");
  };

  const handleGetLaborsClick = () => {
    // Navigate to the login page
    navigate("/getlabors");
  };

  const handleGetTodayAttendanceClick = () => {
    // Navigate to the login page
    navigate("/todayattendance");
  };

  const handleGetAllLaborsSalaryClick = () => {
    // Navigate to the login page
    navigate("/alllaborssalary");
  };

  const [menu, setMenu] = useState("menu");

  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
  const userRole = JSON.parse(localStorage.getItem("role"));

  return (
    <>
      <div>
        <BackButton />
      </div>
      <div>
        <UserProfile
          userName={userName}
          userEmployeeID={userEmployeeID}
          userRole={userRole}
        />
      </div>

      <div className="mainDivStyle">
        <div className="mainLeftDivStyle">
          <div
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#ECEFF1",
              height: "100%"
            }}
          >
            <button
              // style={{ marginTop: "20px", marginBottom: "20px" }}
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Labor Details");
              }}
            >
              Manage User
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (Add, Remove & Update)
              </div>
            </button>

            <button
              // style={{ marginTop: "20px", marginBottom: "20px" }}
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("View");
              }}
            >
              View Employee
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View all Supervisors and Labors)
              </div>
            </button>

            <button
              // style={{ marginTop: "20px", marginBottom: "20px" }}
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Salary");
              }}
            >
              Attendance & Salary
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View Labors Salary and today Attendances)
              </div>
            </button>
          </div>
        </div>
        <div className="mainRightDivStyle">
          <div
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#ECEFF1",
              marginLeft: "10px",
            }}
          >
            {menu == "menu" && (
              <img
                src={AdminImg}
                alt="admin"
                className="img-fluid"
                style={{
                  filter: "brightness(85%)",
                  // maxWidth: "100%",
                  height: "calc(100vh - 376px)",
                  objectFit: "fill",
                  borderRadius:"5px"

                  // marginTop: "5px"
                }}
              />
            )}

            <div className="buttonContainerStyle">
              {menu == "Labor Details" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleAddSupervisorClick}
                  >
                    Add Supervisor
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleUpdateSupervisorClick}
                  >
                    Update Supervisor
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleRemoveSupervisorClick}
                  >
                    Remove Supervisor
                  </button>
                </div>
              )}

              {menu == "View" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleGetSupervisorsClick}
                  >
                    View All Supervisors
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleGetLaborsClick}
                  >
                    View All Labors
                  </button>
                </div>
              )}
              {menu == "Salary" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleGetTodayAttendanceClick}
                  >
                    View Today Labor Attendance
                  </button>

                  <button
                    className="buttonStyle2"
                    onClick={handleGetAllLaborsSalaryClick}
                  >
                    View Labor Salary Cost By Month
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
