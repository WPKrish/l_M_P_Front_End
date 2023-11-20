import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/ButtonsInProfile.css";
import { useState } from "react";
import BackButton from "../components/BackButton";
import LaborImg from "../assest/Labor.jpg";

const Labor = () => {
  const navigate = useNavigate();

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

  // Set new page for the labor, because they don't need employeeID

  // const handleGetCurrentMonthlyAttendanceClick = () => {
  //   // Navigate to the login page
  //   navigate("/thismonthattendance");
  // };
  const handleGetCurrentMonthlyAttendanceForLaborClick = () => {
    // Navigate to the login page
    navigate("/thismonthattendanceforlabor");
  };

  // const handleGetCurrentMonthSalaryClick = () => {
  //   // Navigate to the login page
  //   navigate("/thismonthsalary");
  // };
  const handleGetCurrentMonthSalaryForLaborClick = () => {
    // Navigate to the login page
    navigate("/thismonthsalaryforlabor");
  };

  // const handleGetMonthlySalaryClick = () => {
  //   // Navigate to the login page
  //   navigate("/monthlysalary");
  // };
  const handleGetMonthlySalaryForLaborClick = () => {
    // Navigate to the login page
    navigate("/monthlysalaryforlabor");
  };

  // const handleGetMonthlyAttendanceClick = () => {
  //   // Navigate to the login page
  //   navigate("/monthlyattendance");
  // };
  const handleGetMonthlyAttendanceForLaborClick = () => {
    // Navigate to the login page
    navigate("/monthlyattendanceforlabor");
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
      <div>
        <BackButton />
      </div>
      <div>
        <UserProfile
          userName={userName}
          userRole={userRole}
          userEmployeeID={userEmployeeID}
        />
      </div>

      <div className="mainDivStyle">
        <div className="mainLeftDivStyle">
          <div
            style={{
              // border: "1px solid #ccc",
              // padding: "5px",
              // paddingTop: "50px",
              // paddingBottom: "40px",
              // borderRadius: "5px",
              // backgroundColor: "#ECEFF1",
              // height:"100%"
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
                setMenu("Labors");
              }}
            >
              All Labors & Monthly Points
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View All Labors or Monthly Points)
              </div>
            </button>

            <button
              // style={{ marginTop: "20px", marginBottom: "20px" }}
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Salary");
              }}
            >
              Salary
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View Monthly Salary)
              </div>
            </button>

            <button
              // style={{ marginTop: "20px", marginBottom: "20px" }}
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Attendance");
              }}
            >
              View Attendance
              <div style={{ fontSize: "12px", textTransform: "capitalize" }}>
                (View Attendace & Monthly My Attendances)
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
                src={LaborImg}
                alt="LaborImg"
                className="img-fluid"
                style={{
                  filter: "brightness(55%)",
                  height: "calc(100vh - 376px)",
                  

                  // marginTop: "5px"
                }}
              />
            )}

            <div className="buttonContainerStyle">
              {menu == "Labors" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    onClick={handleGetLaborsClick}
                  >
                    View All Labors
                  </button>
                  <button
                    className="buttonStyle2"
                    onClick={handleGetMonthlyPointsClick}
                  >
                    View Monthly Labor Points
                  </button>
                </div>
              )}

              {menu == "Attendance" && (
                <>
                <div className="subHeading">All Labors Attendances</div>
                <div className="boarderInBothDivStyle">
                  <div className="buttonGroupStyleInBorder">
                    <button
                      style={{
                        width: "50%",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                      className="buttonStyle2"
                      onClick={handleGetTodayAttendanceClick}
                    >
                      View Today Labor Attendances
                    </button>

                    <button
                      style={{
                        width: "50%",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                      className="buttonStyle2"
                      onClick={handleGetDailyAttendanceClick}
                    >
                      View Daily Labor Attendances
                    </button>
                  </div>
                </div>
                </>
              )}

              {menu == "Attendance" && (
                <>
                <div className="subHeading">My Attendances</div>
                <div className="boarderInBothDivStyle">
                  <div className="buttonGroupStyleInBorder">
                    <button
                      style={{
                        width: "50%",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                      className="buttonStyle2"
                      // onClick={handleGetCurrentMonthlyAttendanceClick}
                      onClick={handleGetCurrentMonthlyAttendanceForLaborClick}
                    >
                      View This Month My Attendances
                    </button>

                    <button
                      style={{
                        width: "50%",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                      className="buttonStyle2"
                      // onClick={handleGetMonthlyAttendanceClick}
                      onClick={handleGetMonthlyAttendanceForLaborClick}
                    >
                      View Monthly My Attendaces
                    </button>
                  </div>
                </div>
                </>
              )}

              {menu == "Salary" && (
                <div className="buttonGroupStyle">
                  <button
                    className="buttonStyle2"
                    // onClick={handleGetCurrentMonthSalaryClick}
                    onClick={handleGetCurrentMonthSalaryForLaborClick}
                  >
                    View This Month My Salary
                  </button>

                  <button
                    className="buttonStyle2"
                    // onClick={handleGetMonthlySalaryClick}
                    onClick={handleGetMonthlySalaryForLaborClick}
                  >
                    View Monthly My Salary
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

export default Labor;
