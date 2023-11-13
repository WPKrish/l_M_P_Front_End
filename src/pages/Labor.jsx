import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/ButtonsInProfile.css";

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

  // Get saved data from local storage to Set to the User Profile details
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = localStorage.getItem("name");
  const userRole = localStorage.getItem("role");

  return (
    <>
      <div>
        <UserProfile
          userName={userName}
          userRole={userRole}
          userEmployeeID={userEmployeeID}
        />
      </div>

      <div className="buttonContainerStyle">
        <div className="buttonGroupStyle">
          <button className="buttonStyle" onClick={handleGetLaborsClick}>
            View All Labors
          </button>
          <button className="buttonStyle" onClick={handleGetMonthlyPointsClick}>
            View Monthly Labor Points
          </button>
          
        </div>

        <div className="buttonGroupStyle">
        <button
            className="buttonStyle"
            onClick={handleGetTodayAttendanceClick}
          >
            View Today Labor Attendances
          </button>

          <button
            className="buttonStyle"
            onClick={handleGetDailyAttendanceClick}
          >
            View Daily Labor Attendances
          </button>
        </div>

        <div className="buttonGroupStyle">
          <button
            className="buttonStyle"
            // onClick={handleGetCurrentMonthlyAttendanceClick}
            onClick={handleGetCurrentMonthlyAttendanceForLaborClick}
          >
            View This Month My Attendances
          </button>
          <button
            className="buttonStyle"
            // onClick={handleGetMonthlyAttendanceClick}
            onClick={handleGetMonthlyAttendanceForLaborClick}
          >
            View Monthly My Attendaces
          </button>
        </div>

        <div className="buttonGroupStyle">
          <button
            className="buttonStyle"
            // onClick={handleGetCurrentMonthSalaryClick}
            onClick={handleGetCurrentMonthSalaryForLaborClick}
            
          >
            View This Month My Salary
          </button>

          <button className="buttonStyle" 
          // onClick={handleGetMonthlySalaryClick}
          onClick={handleGetMonthlySalaryForLaborClick}
          >
          View Monthly My Salary
          </button>
        </div>
      </div>
    </>
  );
};

export default Labor;
