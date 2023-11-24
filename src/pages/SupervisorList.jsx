import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UsersList.css";
import UserProfile from "../components/UserProfile";
import BackButton from "../components/BackButton";

const SupervisorList = () => {
  const [supervisors, setSupervisors] = useState([]);
  const [filterSupervisors, setFilterSupervisors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => handleGetSupervisor, []);

  const handleGetSupervisor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/user/supervisors`
      );
      setSupervisors(response.data);
    } catch (error) {
      console.error("Error fetching supervisors: ", error);
    }
  };

  useEffect(() => {
    // Filter labors based on the search term
    const filtered = supervisors.filter((supervisor) =>
    supervisor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterSupervisors(filtered);
  }, [searchTerm, supervisors]);

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
      <h3>Admins and Supervisors</h3>
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
        <table className="user-table1">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Job Role</th>
              <th>Site</th>
              <th>Birth Day</th>
              <th>Blood Group</th>
              <th>Phone No</th>
              <th>Address</th>
              <th>Emergency Name</th>
              <th>Emergency Phone No</th>
            </tr>
          </thead>
          <tbody>
            {filterSupervisors.map((supervisor) => (
              <tr key={supervisor.employeeID}>
                <td>{String(supervisor.employeeID)}</td>
                <td>{supervisor.name}</td>
                <td>{supervisor.jobRole.role}</td>
                <td>{supervisor.site.siteName}</td>
                <td>
                  {new Date(supervisor.birthDay).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td>{supervisor.bloodGroup}</td>
                <td>{supervisor.phoneNo}</td>
                <td>{supervisor.address}</td>
                <td>{supervisor.emergencyName}</td>
                <td>{supervisor.emergencyPhoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SupervisorList;
