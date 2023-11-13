import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/ButtonsInProfile.css";

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
        <div className="buttonGroupStyle">
          <button className="buttonStyle" onClick={handleAddSupervisorClick}>
            Add Supervisor
          </button>
          <button className="buttonStyle" onClick={handleUpdateSupervisorClick}>
            Update Supervisor
          </button>
          <button className="buttonStyle" onClick={handleRemoveSupervisorClick}>
            Remove Supervisor
          </button>
        </div>

        <div className="buttonGroupStyle">
          <button className="buttonStyle" onClick={handleGetSupervisorsClick}>
            View All Supervisors
          </button>
          <button className="buttonStyle" onClick={handleGetLaborsClick}>
            View All Labors
          </button>
        </div>

        <div className="buttonGroupStyle">
          <button
            className="buttonStyle"
            onClick={handleGetTodayAttendanceClick}
          >
            View Today Labor Attendance
          </button>

          <button
            className="buttonStyle"
            onClick={handleGetAllLaborsSalaryClick}
          >
            View Labor Salary Cost By Month
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
