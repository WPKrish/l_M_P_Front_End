// import { useNavigate } from "react-router-dom";
// import UserProfile from "../components/UserProfile";
// import "../styles/ButtonsInProfile.css";
// import { useState } from "react";
// import BackButton from "../components/BackButton";

// const Supervisor = () => {
//   const navigate = useNavigate();

//   const handleAddLaborClick = () => {
//     // Navigate to the login page
//     navigate("/register");
//   };
//   const handleUpdateSupervisorClick = () => {
//     // Navigate to the login page
//     navigate("/updateuser");
//   };

//   const handleRemoveLaborrClick = () => {
//     // Navigate to the login page
//     navigate("/remove");
//   };

//   const handleGetLaborsClick = () => {
//     // Navigate to the login page
//     navigate("/getlabors");
//   };

//   const handleGetTodayAttendanceClick = () => {
//     // Navigate to the login page
//     navigate("/todayattendance");
//   };

//   const handleGetDailyAttendanceClick = () => {
//     // Navigate to the login page
//     navigate("/dailyattendance");
//   };

//   const handleMarkAttendanceClick = () => {
//     // Navigate to the login page
//     navigate("/markattendance");
//   };

//   const handleMarkPointClick = () => {
//     // Navigate to the login page
//     navigate("/markpoint");
//   };

//   const handleGetCurrentMonthlyAttendanceClick = () => {
//     // Navigate to the login page
//     navigate("/thismonthattendance");
//   };

//   const handleGetCurrentMonthSalaryClick = () => {
//     // Navigate to the login page
//     navigate("/thismonthsalary");
//   };

//   const handleGetMonthlySalaryClick = () => {
//     // Navigate to the login page
//     navigate("/monthlysalary");
//   };

//   const handleGetMonthlyAttendanceClick = () => {
//     // Navigate to the login page
//     navigate("/monthlyattendance");
//   };

//   const handleGetAllLaborsSalaryClick = () => {
//     // Navigate to the login page
//     navigate("/alllaborssalary");
//   };

//   const handleGetMonthlyPointsClick = () => {
//     // Navigate to the login page
//     navigate("/monthlypoints");
//   };

//   const [menu, setMenu] = useState("menu");

//   // Get saved data from local storage
//   const userEmployeeID = localStorage.getItem("employeeID");
//   const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
//   const userRole = JSON.parse(localStorage.getItem("role"));

//   return (
//     <>
//         {/* <Sidebar></Sidebar> */}
//         <div>
//           <UserProfile
//             userName={userName}
//             userEmployeeID={userEmployeeID}
//             userRole={userRole}
//           />
//         </div>
//         <div><BackButton/></div>

//         <div className="buttonContainerStyle">
//           <button
//             className="buttonStyle"
//             onClick={() => {
//               setMenu("Mark");
//             }}
//           >
//             Mark Attendance and Point
//             <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
//               (Mark Labors Attendance and Labors Points)
//             </div>
//           </button>

//           <button
//             className="buttonStyle"
//             onClick={() => {
//               setMenu("Labor Details");
//             }}
//           >
//             Manage Labor
//             <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
//               (Add, Remove, Update & View All Labors)
//             </div>
//           </button>

//           <button
//             className="buttonStyle"
//             onClick={() => {
//               setMenu("Salary");
//             }}
//           >
//             Salary
//             <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
//               (View Labors Salary)
//             </div>
//           </button>

//           <button
//             className="buttonStyle"
//             onClick={() => {
//               setMenu("Attendance");
//             }}
//           >
//             Attendance
//             <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
//               (View Labors Attendance)
//             </div>
//           </button>

//           <button className="buttonStyle" onClick={handleGetMonthlyPointsClick}>
//             Points
//             <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
//               (View Monthly Labor's Points)
//             </div>
//           </button>

//           {/* From here Above buttons are shown, If these are clicked */}

//           <br></br>
//           {menu == "Mark" && (
//             <div className="buttonGroupStyle">
//               <button
//                 className="buttonStyle2"
//                 onClick={handleMarkAttendanceClick}
//               >
//                 Mark Labor Attendance
//               </button>
//               <button className="buttonStyle2" onClick={handleMarkPointClick}>
//                 Mark Labor Points
//               </button>
//             </div>
//           )}

//           {/* <br></br> */}
//           {menu == "Labor Details" && (
//             <div className="buttonGroupStyle">
//               <button className="buttonStyle2" onClick={handleAddLaborClick}>
//                 Add Labor
//               </button>
//               <button
//                 className="buttonStyle2"
//                 onClick={handleUpdateSupervisorClick}
//               >
//                 Update Labor
//               </button>
//               <button
//                 className="buttonStyle2"
//                 onClick={handleRemoveLaborrClick}
//               >
//                 Remove Labor
//               </button>
//               <button className="buttonStyle2" onClick={handleGetLaborsClick}>
//                 View All Labors
//               </button>
//             </div>
//           )}

//           {/* <br></br> */}
//           {menu == "Attendance" && (
//             <div className="buttonGroupStyle">
//               <button
//                 className="buttonStyle2"
//                 onClick={handleGetTodayAttendanceClick}
//               >
//                 View Today Labor Attendances
//               </button>

//               <button
//                 className="buttonStyle2"
//                 onClick={handleGetDailyAttendanceClick}
//               >
//                 View Daily Labor Attendances
//               </button>
//             </div>
//           )}

//           {menu == "Attendance" && (
//             <div className="buttonGroupStyle">
//               <button
//                 className="buttonStyle2"
//                 onClick={handleGetCurrentMonthlyAttendanceClick}
//               >
//                 View This Month Labor Attendances
//               </button>
//               <button
//                 className="buttonStyle2"
//                 onClick={handleGetMonthlyAttendanceClick}
//               >
//                 View Monthly Labor Attendaces
//               </button>
//             </div>
//           )}

//           {/* <br></br> */}
//           {menu == "Salary" && (
//             <div className="buttonGroupStyle">
//               <button
//                 className="buttonStyle2"
//                 onClick={handleGetAllLaborsSalaryClick}
//               >
//                 View Labor Salary Cost By Month
//               </button>
//               <button
//                 className="buttonStyle2"
//                 onClick={handleGetCurrentMonthSalaryClick}
//               >
//                 View This Month Labor Salary
//               </button>

//               <button
//                 className="buttonStyle2"
//                 onClick={handleGetMonthlySalaryClick}
//               >
//                 View Monthly Labor Salary
//               </button>
//             </div>
//           )}
//         </div>
//     </>
//   );
// };

// export default Supervisor;

import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/ButtonsInProfile.css";
import { useState } from "react";
import BackButton from "../components/BackButton";
import SupervisorImg from "../assest/Supervisor.jpg";


const Supervisor = () => {
  const navigate = useNavigate();

  const handleAddLaborClick = () => {
    // Navigate to the login page
    navigate("/register");
  };
  const handleUpdateSupervisorClick = () => {
    // Navigate to the login page
    navigate("/updateuser");
  };

  const handleRemoveLaborrClick = () => {
    // Navigate to the login page
    navigate("/remove");
  };

  const handleGetLaborsClick = () => {
    // Navigate to the login page
    navigate("/getlabors");
  };

  const handleGetTodayAttendanceClick = () => {
    // Navigate to the login page
    navigate("/todayattendance");
  };

  const handleGetDailyAttendanceClick = () => {
    // Navigate to the login page
    navigate("/dailyattendance");
  };

  const handleMarkAttendanceClick = () => {
    // Navigate to the login page
    navigate("/markattendance");
  };

  const handleMarkPointClick = () => {
    // Navigate to the login page
    navigate("/markpoint");
  };

  const handleGetCurrentMonthlyAttendanceClick = () => {
    // Navigate to the login page
    navigate("/thismonthattendance");
  };

  const handleGetCurrentMonthSalaryClick = () => {
    // Navigate to the login page
    navigate("/thismonthsalary");
  };

  const handleGetMonthlySalaryClick = () => {
    // Navigate to the login page
    navigate("/monthlysalary");
  };

  const handleGetMonthlyAttendanceClick = () => {
    // Navigate to the login page
    navigate("/monthlyattendance");
  };

  const handleGetAllLaborsSalaryClick = () => {
    // Navigate to the login page
    navigate("/alllaborssalary");
  };

  const handleGetMonthlyPointsClick = () => {
    // Navigate to the login page
    navigate("/monthlypoints");
  };

  const [menu, setMenu] = useState("menu");

  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
  const userRole = JSON.parse(localStorage.getItem("role"));

  return (
    <>
      {/* <Sidebar></Sidebar> */}
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
              // height: "calc(100vh-344px)",
              // minWidth:"410px"
            }}
          >
            <button
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Mark");
              }}
            >
              Mark Attendance and Point
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (Mark Labors Attendance and Labors Points)
              </div>
            </button>

            <button
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Labor Details");
              }}
            >
              Manage Labor
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (Add, Remove, Update & View All Labors)
              </div>
            </button>

            <button
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Salary");
              }}
            >
              Salary
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View Labors Salary)
              </div>
            </button>

            <button
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Attendance");
              }}
            >
              Attendance
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View Labors Attendance)
              </div>
            </button>

            <button
              className="buttonStyleInBox"
              onClick={handleGetMonthlyPointsClick}
            >
              Points
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View Monthly Labor's Points)
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
                src={SupervisorImg}
                alt="Supervisor"
                className="img-fluid"
                style={{
                  filter: "brightness(70%)",
                  // width: "100%",
                  height: "calc(100vh - 376px)",
                  objectFit: "fill",
                  borderRadius:"5px"
                  

                  // marginTop: "5px"
                }}
              />
            )}

            <div className="buttonContainerStyle">
              {/* From here Above buttons are shown, If these are clicked */}
              {menu == "Mark" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleMarkAttendanceClick}
                  >
                    Mark Labor Attendance
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleMarkPointClick}
                  >
                    Mark Labor Points
                  </button>
                </div>
              )}

              {/* <br></br> */}
              {menu == "Labor Details" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleAddLaborClick}
                  >
                    Add Labor
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleUpdateSupervisorClick}
                  >
                    Update Labor
                  </button>
                </div>
              )}
              {menu == "Labor Details" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleRemoveLaborrClick}
                  >
                    Remove Labor
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleGetLaborsClick}
                  >
                    View All Labors
                  </button>
                </div>
              )}

              {/* <br></br> */}
              {menu == "Attendance" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleGetTodayAttendanceClick}
                  >
                    View Today Labor Attendances
                  </button>

                  <button
                    className="buttonStyle2"
                    onClick={handleGetDailyAttendanceClick}
                  >
                    View Daily Labor Attendances
                  </button>
                </div>
              )}

              {menu == "Attendance" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleGetCurrentMonthlyAttendanceClick}
                  >
                    View This Month Labor Attendances
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleGetMonthlyAttendanceClick}
                  >
                    View Monthly Labor Attendaces
                  </button>
                </div>
              )}

              {/* <br></br> */}
              {menu == "Salary" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleGetCurrentMonthSalaryClick}
                  >
                    View This Month Labor Salary
                  </button>

                  <button
                    className="buttonStyle2"
                    onClick={handleGetMonthlySalaryClick}
                  >
                    View Monthly Labor Salary
                  </button>
                </div>
              )}
              {menu == "Salary" && (
                <div className="buttonGroupStyle">
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

export default Supervisor;
