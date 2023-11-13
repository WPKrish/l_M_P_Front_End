import { useState } from "react";
import "../styles/MarkAttendance.css";
import UserProfile from "../components/UserProfile";
import axios from "axios";
import { pointOptions } from "../constant/App.constant";

const MarkAttendance = () => {
  const [employeeID, setemployeeID] = useState();
  const [points, setPoints] = useState();

  const handlePointSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/point", {
        employeeID: employeeID,
        points: points,
      });

      if (response.status === 200) {
        setemployeeID();
        setPoints();
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
        alert("Point Marked correctly");
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
      <div className="attendance-container ">
        <form className="attendance-form">
          <br></br>
          <h3>Point Marking</h3>

          <div className="form-group">
            <div>Emoloyee ID</div>
            <input
              type="id"
              placeholder="employee ID"
              value={employeeID}
              onChange={(event) => {
                setemployeeID(event.target.value);
              }}
            />
          </div>
          {/* <div className="form-group">
            <div>Points</div>
            <input
              type="text"
              placeholder="points"
              value={points}
              onChange={(event) => {
                setPoints(event.target.value);
              }}
            />
          </div> */}
          <div className="form-group">
            <div>Points</div>
            <select
              id="point"
              name="point"
              onChange={(event) => {
                setPoints(parseInt(event.target.value, 10)); // Parse the selected value to an integer
              }}
            >
              {Object.keys(pointOptions).map((value) => (
                <option key={value} value={value}>
                  {pointOptions[value]}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handlePointSubmit}> Submit</button>
        </form>
      </div>
    </>
  );
};

export default MarkAttendance;
