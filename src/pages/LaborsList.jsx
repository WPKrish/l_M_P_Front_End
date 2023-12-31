import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UsersList.css";
import UserProfile from "../components/UserProfile";
import BackButton from "../components/BackButton";

const LaborsList = () => {
  const [labors, setLabors] = useState([]);
  const [filteredLabors, setFilteredLabors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleGetLabors();
  }, []);

  const handleGetLabors = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/labors`);
      setLabors(response.data);
      setFilteredLabors(response.data); // Initialize filteredLabors with all labors
    } catch (error) {
      console.error("Error fetching labors: ", error);
    }
  };

  useEffect(() => {
    // Filter labors based on the search term
    const filtered = labors.filter((labor) =>
      labor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLabors(filtered);
  }, [searchTerm, labors]);

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
      <h3>Labors</h3>
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
              <th>Salary Type</th>
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
            {filteredLabors.map((labor) => (
              <tr key={labor.employeeID}>
                <td
                  style={{
                    fontWeight:
                      labor.employeeID === parseInt(userEmployeeID)
                        ? "500"
                        : "",
                  }}
                >
                  {labor.employeeID}
                </td>
                <td>{labor.name}</td>
                <td>{labor.salaryRate.salaryType}</td>
                <td>{labor.site.siteName}</td>
                <td>
                  {new Date(labor.birthDay).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td>{labor.bloodGroup}</td>
                <td>{labor.phoneNo}</td>
                <td>{labor.address}</td>
                <td>{labor.emergencyName}</td>
                <td>{labor.emergencyPhoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LaborsList;
