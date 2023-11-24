import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/ButtonsInProfile.css";
import { useState } from "react";
import BackButton from "../components/BackButton";
import SupervisorImg from "../assest/Supervisor.jpg";

const Supervisor = () => {
  const navigate = useNavigate();

  const handleAddLaborClick = () => {
    //Navigate to the register page
    navigate("/register");
  };
  const handleUpdateSupervisorClick = () => {
    navigate("/updateuser");
  };

  const handleRemoveLaborrClick = () => {
    navigate("/remove");
  };

  const handleGetLaborsClick = () => {
    navigate("/getlabors");
  };

  const handleGetTodayAttendanceClick = () => {
    navigate("/todayattendance");
  };

  const handleGetDailyAttendanceClick = () => {
    navigate("/dailyattendance");
  };

  const handleMarkAttendanceClick = () => {
    navigate("/markattendance");
  };

  const handleMarkPointClick = () => {
    navigate("/markpoint");
  };

  const handleGetCurrentMonthlyAttendanceClick = () => {
    navigate("/thismonthattendance");
  };

  const handleGetCurrentMonthSalaryClick = () => {
    navigate("/thismonthsalary");
  };

  const handleGetMonthlySalaryClick = () => {
    navigate("/monthlysalary");
  };

  const handleGetMonthlyAttendanceClick = () => {
    navigate("/monthlyattendance");
  };

  const handleGetAllLaborsSalaryClick = () => {
    navigate("/alllaborssalary");
  };

  const handleGetMonthlyPointsClick = () => {
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
              height: "100%",
            }}
          >
            <button
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Mark");
              }}
            >
              Mark Attendance and Point
              <div className="smallWordInbuttonStyle">
                (Mark Labors Attendance and Points)
              </div>
            </button>

            <button
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Labor Details");
              }}
            >
              Manage Labor
              <div className="smallWordInbuttonStyle">
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
              <div className="smallWordInbuttonStyle">(View Labors Salary)</div>
            </button>

            <button
              className="buttonStyleInBox"
              onClick={() => {
                setMenu("Attendance");
              }}
            >
              Attendance
              <div className="smallWordInbuttonStyle">
                (View Labors Attendance)
              </div>
            </button>

            <button
              className="buttonStyleInBox"
              onClick={handleGetMonthlyPointsClick}
            >
              Points
              <div className="smallWordInbuttonStyle">
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
                className="supervisorImageStyle"
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

              {menu == "Attendance" && (
                <>
                  <div className="subHeading">All Labors Attendance</div>
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
                  <div className="subHeading">Individual Labor Attendance</div>
                  <div className="boarderInBothDivStyle">
                    <div className="buttonGroupStyleInBorder">
                      <button
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                        className="buttonStyle2"
                        onClick={handleGetCurrentMonthlyAttendanceClick}
                      >
                        View This Month Labor Attendances
                      </button>

                      <button
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                        className="buttonStyle2"
                        onClick={handleGetMonthlyAttendanceClick}
                      >
                        View Monthly Labor Attendaces
                      </button>
                    </div>
                  </div>
                </>
              )}

              {menu == "Salary" && (
                <>
                  <div className="subHeading">Individual Labor Salary</div>
                  <div className="boarderInBothDivStyle">
                    <div className="buttonGroupStyleInBorder">
                      <button
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                        className="buttonStyle2"
                        onClick={handleGetCurrentMonthSalaryClick}
                      >
                        View This Month Labor Salary
                      </button>

                      <button
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                        className="buttonStyle2"
                        onClick={handleGetMonthlySalaryClick}
                      >
                        View Monthly Labor Salary
                      </button>
                    </div>
                  </div>
                </>
              )}

              {menu == "Salary" && (
                <>
                  <div className="subHeading">All Labors Salary</div>
                  <div className="boarderInBothDivStyle">
                    <div className="buttonGroupStyleInBorder">
                      <button
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                        className="buttonStyle2"
                        onClick={handleGetAllLaborsSalaryClick}
                      >
                        View Labor Salary Cost By Month
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supervisor;
