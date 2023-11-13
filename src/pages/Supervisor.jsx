import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/ButtonsInProfile.css";

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

  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = localStorage.getItem("name");
  const userRole = localStorage.getItem("role");

  return (
    <>
      <div>
        <UserProfile
          userName={userName}
          userEmployeeID={userEmployeeID}
          userRole={userRole}
        />
      </div>

      <div className="buttonContainerStyle">
        {/* <button className="buttonStyle" onClick={handleMarkAttendanceClick}>
          Mark Labor Attendance
        </button>
        <br></br> */}

        <div className="buttonGroupStyle">
          <button className="buttonStyle" onClick={handleMarkAttendanceClick}>
            Mark Labor Attendance
          </button>
          <button className="buttonStyle" onClick={handleMarkPointClick}>
            Mark Labor Points
          </button>
        </div>
        <br></br>

        <div className="buttonGroupStyle">
          <button className="buttonStyle" onClick={handleAddLaborClick}>
            Add Labor
          </button>
          <button className="buttonStyle" onClick={handleUpdateSupervisorClick}>
            Update Labor
          </button>
          <button className="buttonStyle" onClick={handleRemoveLaborrClick}>
            Remove Labor
          </button>
        </div>
        <br></br>
        <div className="buttonGroupStyle">
          <button className="buttonStyle" onClick={handleGetLaborsClick}>
            View All Labors
          </button>
          <button
            className="buttonStyle"
            onClick={handleGetTodayAttendanceClick}
          >
            View Today Labor Attendances
          </button>
          <button className="buttonStyle" onClick={handleGetMonthlyPointsClick}>
            View Monthly Labor Points
          </button>
        </div>


        <div className="buttonGroupStyle">
          <button
            className="buttonStyle"
            onClick={handleGetDailyAttendanceClick}
          >
            View Daily Labor Attendances
          </button>

          <button
            className="buttonStyle"
            onClick={handleGetCurrentMonthlyAttendanceClick}
          >
            View This Month Labor Attendances
          </button>
          <button
            className="buttonStyle"
            onClick={handleGetMonthlyAttendanceClick}
          >
            View Monthly Labor Attendaces
          </button>
        </div>

        <div className="buttonGroupStyle">
          <button
            className="buttonStyle"
            onClick={handleGetAllLaborsSalaryClick}
          >
            View Labor Salary Cost By Month
          </button>
          <button
            className="buttonStyle"
            onClick={handleGetCurrentMonthSalaryClick}
          >
            View This Month Labor Salary
          </button>

          <button className="buttonStyle" onClick={handleGetMonthlySalaryClick}>
            View Monthly Labor Salary
          </button>
        </div>
      </div>
    </>
  );
};

export default Supervisor;
