import React, { useState } from "react";
import axios from "axios";
import "../styles/ThisMonthSalary.css";
import UserProfile from "../components/UserProfile";
import { monthOptions } from "../constant/App.constant";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const MontlyPoint = () => {
  const [labors, setLabors] = useState([]);
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState();
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSelectLabor = async (event) => {
    event.preventDefault();

    if (!month || !year) {
      // alert("Please fill in all the required fields");
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      return; // Prevent further execution
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/point/labor/${year}/${month}`
      );
      console.log(response);
      setLabors(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        // alert("Labor not found for this month");
        Swal.fire({
          ...defaultConfig,
          title: "Labor not found for this month",
        });
      } else {
        // alert(error);
        // alert("Fill all details correctly");
        Swal.fire({
          ...defaultConfig,
          title: "Fill all details correctly",
        });
      }
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
      <h3>All Labors Points per this Month</h3>
      <div>
        <div className="salary-container">
          <form className="salary-form">
            {/* <h3>All Labors Points per this Month</h3> */}
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
                  <th>Month</th>

                  <th>Total Points</th>
                  <th>
                    Point recieved <br></br> number of times
                  </th>
                </tr>
              </thead>
              <tbody>
                {labors.map((labor) => (
                  // <tr key={labor.employeeID}>
                  //   <td>{labor.employeeID}</td>
                  //   <td>{labor.name}</td>
                  //   <td>
                  //     {labor.month} {labor.year}
                  //   </td>

                  //   <td>{labor.pointSum}</td>
                  //   <td>{labor.pointIDCount}</td>
                  // </tr>
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
                    <td
                      style={{
                        fontWeight:
                          labor.employeeID === parseInt(userEmployeeID)
                            ? "500"
                            : "",
                      }}
                    >
                      {labor.name}
                    </td>
                    <td
                      style={{
                        fontWeight:
                          labor.employeeID === parseInt(userEmployeeID)
                            ? "500"
                            : "",
                      }}
                    >
                      {labor.month} {labor.year}
                    </td>
                    <td
                      style={{
                        fontWeight:
                          labor.employeeID === parseInt(userEmployeeID)
                            ? "500"
                            : "",
                      }}
                    >
                      {labor.pointSum}
                    </td>
                    <td
                      style={{
                        fontWeight:
                          labor.employeeID === parseInt(userEmployeeID)
                            ? "500"
                            : "",
                      }}
                    >
                      {labor.pointIDCount}
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

export default MontlyPoint;
