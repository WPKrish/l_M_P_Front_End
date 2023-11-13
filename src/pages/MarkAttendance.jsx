import { useState } from "react";
import "../styles/MarkAttendance.css";
import UserProfile from "../components/UserProfile";
import axios from "axios";

const MarkAttendance = () => {
  const [employeeIDin, setEmployeeIDin] = useState();
  const [dailyJob, setDailyJob] = useState();
  const [employeeIDOut, setEmployeeIDOut] = useState();

  const handleInTimeSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/attendance", {
        employeeID: employeeIDin,
        dailyJob: dailyJob,
      });

      if (response.status === 200) {
        setEmployeeIDin();
        setDailyJob("");
        console.log("response :", response);
        alert(response.data);
      } else {
        alert("Unexpected response from the server");
      }
    } catch (err) {
      console.error("Error msg : ", err); // Log the error to the console for debugging
      if (err.response.status === 404) {
        console.log(err.response);
        alert(err.response.data);
      } else if (err.response.status === 409) {
        alert(err.response.data);
      } else if (err.response.status === 400) {
        alert("Input Details Correctly");
      } else {
        alert("Attendance Marked correctly");
      }
    }
  };

  const handleOutTimeSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put("http://localhost:8080/attendance/addOutTime", {
        employeeID: employeeIDOut,
      });
      alert("Labor offtime marking  Successfully");
      setEmployeeIDOut();
    } catch (err) {
      alert("User Not Found");
    }
  };
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
      <div className="attendance-container ">
        <form className="attendance-form">
          <br></br>
          <h3>In Time</h3>

          <div className="form-group">
            <div>Emoloyee ID</div>
            <input
              type="id"
              placeholder="employee ID"
              value={employeeIDin}
              onChange={(event) => {
                setEmployeeIDin(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <div>Daily Job</div>
            <input
              type="text"
              placeholder="daily job"
              value={dailyJob}
              onChange={(event) => {
                setDailyJob(event.target.value);
              }}
            />
          </div>

          <button onClick={handleInTimeSubmit}> Submit</button>
        </form>

        <form className="attendance-form">
          <br></br>
          <h3>Off Time</h3>

          <div className="form-group">
            <div>Emoloyee ID</div>
            <input
              type="id"
              placeholder="employee ID"
              value={employeeIDOut}
              onChange={(event) => {
                setEmployeeIDOut(event.target.value);
              }}
            />
          </div>

          <button onClick={handleOutTimeSubmit}> Submit</button>
        </form>
      </div>
    </>
  );
};

export default MarkAttendance;
