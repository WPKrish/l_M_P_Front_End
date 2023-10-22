import NavBarWithLogout from "../components/NavBarWithLogout";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const navigate = useNavigate();
  const handleAddSupervisorClick = () => {
    // Navigate to the login page
    navigate("/register");
  };

  const buttonStyle = {
    width: "400px",
    height: "40px",
    marginBottom: "10px",
    backgroundColor: "#A9A79F",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "5px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };
  const buttonHoverStyle = {
    backgroundColor: "#7F7E79", // Adjust the color on hover
  };

  return (
    <>
      <NavBarWithLogout />

      <div
        style={{
          width: "1220px",
          margin: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#F4F2E9",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "auto", // Set the height to 100% of the viewport height
        }}
      >
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Admin Profile
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ color: "#000000", fontWeight: "500", marginRight: '10px', padding:'5px' }}>Name:</label>
          <div>John Doe</div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ color: "#000000", fontWeight: "500" , marginRight: '10px', padding:'5px'}}>
            Job Role:
          </label>
          <div>
            {/* <input type="text" value={"jobRole"} /> */}
            Admin
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ color: "#000000", fontWeight: "500", marginRight: '10px', padding:'5px'}}>
            Employee ID:
          </label>
          <div>{/* <input type="text" value={"employeeID"} /> */}1</div>
        </div>
      </div>
      

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button style={{ ...buttonStyle, ...buttonHoverStyle }} onClick={handleAddSupervisorClick}>
          Add Supervisor
        </button>
        <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
          Update Supervisor
        </button>
        <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
          Remove Supervisor
        </button>
        <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
          View All Supervisors
        </button>
        <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
          View All Labors
        </button>
        <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
          View LAbor Attendance
        </button>
        <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
          View Labor Full Details
        </button>
        <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
          View Labor Salary Cost By Month
        </button>
      </div>
    </>
  );
};

export default Admin;
