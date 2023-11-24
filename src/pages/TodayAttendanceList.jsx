import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UsersList.css";
import UserProfile from "../components/UserProfile";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const TodayAttendanceList = () => {
  const [attendances, setAttendances] = useState([]);
  const [filteredAttendances, setFilteredAttendances] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => handleGetAttendances, []);

  const handleGetAttendances = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/attendance/today"
      );
      console.log("API Response:", response.data);
      setAttendances(response.data);
    } catch (error) {
      Swal.fire({
        ...defaultConfig,
        title: "Labors Not Found Today",
      });
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
        <BackButton />
      </div>
      <div>
        <UserProfile
          userName={userName}
          userEmployeeID={userEmployeeID}
          userRole={userRole}
        />
      </div>
      <h3>Today Working Labor's Attendances</h3>
      <div>
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
        <div className="table-container">
          {attendances.length > 0 && (
            <table className="user-table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Today Job</th>
                  <th>In time</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div>
            {!attendances.length > 0 && (
              <div style={{ fontSize: "18px" }}>
                <br></br>Labors Not Attend Today Until This Moment
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayAttendanceList;
