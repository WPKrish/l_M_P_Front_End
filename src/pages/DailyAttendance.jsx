import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ThisMonthAttendances.css";
import UserProfile from "../components/UserProfile";
import { monthOptions } from "../constant/App.constant";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import { defaultConfig } from "../constant/App.constant";

const DailyAttendance = () => {
  const [attendances, setAttendances] = useState([]);
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState(2023);

  const [isEmpty, setIsEmpty] = useState(true);

  const [filteredAttendances, setFilteredAttendances] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectLabor = async (event) => {
    event.preventDefault();

    if (!year || !month || !date) {
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      setIsEmpty(true);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/labor/daily/${year}/${month}/${date}`
      );
      console.log(response);
      setAttendances(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        Swal.fire({
          ...defaultConfig,
          title: "Labors not found for this day",
        });
        setIsEmpty(true);
      } else if (error.response.status === 400) {
        Swal.fire({
          ...defaultConfig,
          title: "Input Correct Details",
        });
        setIsEmpty(true);
      } else {
        alert(error);
      }
    }
  };

  useEffect(() => {
    // Filter labors based on the search term
    const filtered = attendances.filter((attendance) =>
      attendance.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAttendances(filtered);
  }, [searchTerm, attendances]);

  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
  const userRole = JSON.parse(localStorage.getItem("role"));

  return (
    <>
      <div>
        <div>
          <BackButton />
        </div>
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

        {!isEmpty && (
          <div className="searchByName">
            <label htmlFor="search">Search by Name :</label>
            <input
              className="searchInput"
              type="text"
              id="search"
              placeholder="Enter name....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

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
                {filteredAttendances.map((attendance) => (
                  <tr key={attendance.attID}>
                    <td
                      style={{
                        fontWeight:
                          attendance.employeeID === parseInt(userEmployeeID)
                            ? "bold"
                            : "",
                      }}
                    >
                      {attendance.employeeID}
                    </td>
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
