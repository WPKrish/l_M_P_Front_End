
import React, { useState } from "react";
import axios from "axios";
import "../styles/ThisMonthAttendances.css";
import UserProfile from "../components/UserProfile";
import { monthOptions } from "../constant/App.constant";

const DailyAttendance = () => {
  const [attendances, setAttendances] = useState([]);
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState(2023);
  
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSelectLabor = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/labor/daily/${year}/${month}/${date}`
      );
      console.log(response);
      setAttendances(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Labors not found for this day");
      }
      else if (error.response.status === 400) {
        alert("Input Details Correctly");
      } else {
        alert(error);
      }
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
      <h3>Daily Labor Attendance</h3>
      <div>
        <div className="attendances-container">
          <form className="attendances-form">
            {/* <br></br>
            <h3>Monthly Labor Attendance</h3> */}
            <div className="command">Fill in the Information Below</div>

            <div className="form-group">
              <div>Year</div>
              <input
                type="int"
                placeholder="year"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Month</div>
              <select
                id="month"
                name="month"
                onChange={(event) => {
                  setMonth(parseInt(event.target.value, 10)); // Parse the selected value to an integer
                }}
              >
                {Object.keys(monthOptions).map((value) => (
                  <option key={value} value={value}>
                    {monthOptions[value]}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <div>Date</div>
              <input
                type="int"
                placeholder="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </div>

            <button onClick={handleSelectLabor}> Search</button>
          </form>
        </div>


        <div className="table-container">
        {!isEmpty && (
          <table className="user-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Today Job</th>
                <th>In time</th>
                <th>Out time</th>
                
              </tr>
            </thead>
            <tbody>
              {attendances.map((attendance) => (
                <tr key={attendance.attID}>
                  {/* <td>{attendances.dailyJob}</td> */}
                  <td>{String(attendance?.employeeID)}</td>
                  <td>{attendance?.name || "NA"}</td>
                  <td>{attendance?.dailyJob || "NA"}</td>
                  <td>
                    {attendance?.inTime
                      ? new Date(attendance.inTime).toLocaleTimeString()
                      : "NA"}
                  </td>
                  <td>
                    {attendance?.outTime
                      ? new Date(attendance.outTime).toLocaleTimeString()
                      : "NA"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
      </div>
    </>
  );
};

export default DailyAttendance;
