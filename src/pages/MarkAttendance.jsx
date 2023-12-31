import { useState } from "react";
import "../styles/MarkAttendance.css";
import UserProfile from "../components/UserProfile";
import axios from "axios";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import { defaultConfig } from "../constant/App.constant";

const MarkAttendance = () => {
  const [employeeIDin, setEmployeeIDin] = useState();
  const [dailyJob, setDailyJob] = useState();
  const [employeeIDOut, setEmployeeIDOut] = useState();

  const handleInTimeSubmit = async (event) => {
    event.preventDefault();

    if (!employeeIDin || !dailyJob) {
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/attendance", {
        employeeID: employeeIDin,
        dailyJob: dailyJob,
      });

      if (response.status === 200) {
        setEmployeeIDin();
        setDailyJob("");
        console.log("response :", response);
        Swal.fire({
          ...defaultConfig,
          icon: "success",
          title: response.data,
        });
      } else {
        Swal.fire({
          ...defaultConfig,
          title: "Unexpected response from the server",
        });
      }
    } catch (err) {
      console.error("Error msg : ", err); // Log the error to the console for debugging
      if (err.response.status === 404) {
        Swal.fire({
          ...defaultConfig,
          title: err.response.data,
        });
      } else if (err.response.status === 409) {
        Swal.fire({
          ...defaultConfig,
          title: err.response.data,
        });
      } else if (err.response.status === 400) {
        Swal.fire({
          ...defaultConfig,
          title: err.response.data,
        });
      } else {
        Swal.fire({
          ...defaultConfig,
          title: err.response.data,
        });
      }
    }
  };

  const handleOutTimeSubmit = async (event) => {
    event.preventDefault();

    if (!employeeIDOut) {
      Swal.fire({
        ...defaultConfig,
        icon: "error",
        title: "Please fill in employeeID firstly",
      });
      return; // Prevent further execution
    }

    try {
      await axios.put("http://localhost:8080/attendance/addOutTime", {
        employeeID: employeeIDOut,
      });
      setEmployeeIDOut();
      Swal.fire({
        ...defaultConfig,
        icon: "success",
        title: "Successful marking of off-time",
      });
    } catch (err) {
      Swal.fire({
        ...defaultConfig,
        icon: "error",
        title: "User Not Found",
      });
    }
  };
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
