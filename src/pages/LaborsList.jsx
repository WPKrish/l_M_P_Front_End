import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UsersList.css";
import UserProfile from "../components/UserProfile";

const LaborsList = () => {
  const [labors, setLabors] = useState([]);

  useEffect(() => handleGetlabors, []);

  const handleGetlabors = async (event) => {
    try {
      const response = await axios.get(`http://localhost:8080/user/labors`);
      console.log("API Response:", response.data);
      console.log(response.data);
      setLabors(response.data);
    } catch (error) {
      console.error("Error fetching labors: ", error);
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
      <h3>labors</h3>
      <div>
        <div className="user-topic">
          {/* <h3>labors</h3> */}
        </div>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Salary Type</th>
                <th>Site</th>
                <th>Birth Day</th>
              </tr>
            </thead>
            <tbody>
              {labors.map((labors) => (
                <tr key={labors.employeeID}>
                  <td>{String(labors.employeeID)}</td>
                  <td>{labors.name}</td>
                  <td>{labors.salaryRate.salaryType}</td>
                  <td>{labors.site.siteName}</td>
                  <td>
                    {new Date(labors.birthDay).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LaborsList;
