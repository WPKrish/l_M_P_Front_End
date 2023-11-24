import axios from "axios";
import { useState } from "react";
import "../styles/Register.css";
import UserProfile from "../components/UserProfile";
import {
  rateIdOptionsForAdmin,
  rateIdOptionsForLabor,
} from "../constant/App.constant";
import { roleIdOptions } from "../constant/App.constant";
import { siteIdOptions } from "../constant/App.constant";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import { defaultConfig } from "../constant/App.constant";

const RegisterUser = () => {
  const [employeeID, setEmployeeID] = useState();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState(null);
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [roleID, setRoleID] = useState(1);
  const [rateID, setRateID] = useState();
  const [siteID, setSiteID] = useState(1);
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [emergencyPhoneNo, setEmergencyPhoneNo] = useState("");
  const [emergencyName, setEmergencyName] = useState("");

  const [userDetails, setUserDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const isSimpleUsername = (username) => {
    // Define a regular expression pattern for simple characters (alphabets, numbers, underscores)
    const pattern = /^[a-z]+$/;
    return pattern.test(username);
  };

  const handleSelectLabor = async (event) => {
    event.preventDefault();

    if (!employeeID) {
      Swal.fire({
        ...defaultConfig,
        title: "Please fill Employee ID firstly",
      });
      return; // Prevent further execution
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/user/${employeeID}`
      );
      setUserDetails(response.data);

      setName(response.data.name);
      setUsername(response.data.username);
      setPassword(response.data.password);
      setBirthDay(response.data.birthDay);
      setAddress(response.data.address);
      setPhoneNo(response.data.phoneNo);
      setRoleID(response.data.jobRole.roleID);
      setRateID(response.data.salaryRate.rateID);
      setBloodGroup(response.data.bloodGroup);
      setSiteID(response.data.site.siteID);
      setEmergencyName(response.data.emergencyName);
      setEmergencyPhoneNo(response.data.emergencyPhoneNo);

      setIsEmpty(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !username ||
      !password ||
      !birthDay ||
      !address ||
      !phoneNo ||
      !roleID ||
      !rateID ||
      !siteID ||
      !bloodGroup ||
      !emergencyPhoneNo ||
      !emergencyName
    ) {
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      return; // Prevent further execution
    }

    // Additional check for simple username
    if (!isSimpleUsername(username)) {
      Swal.fire({
        ...defaultConfig,
        title: "Username can only contain simple characters",
      });
      return;
    }
    console.log("role :", roleID);
    console.log("rate :", rateID);

    try {
      await axios.put("http://localhost:8080/user", {
        employeeID: employeeID,
        name: name,
        username: username,
        password: password,
        birthDay: birthDay,
        address: address,
        phoneNo: phoneNo,
        roleID: roleID,
        rateID: rateID,
        siteID: siteID,
        bloodGroup: bloodGroup,
        emergencyPhoneNo: emergencyPhoneNo,
        emergencyName: emergencyName,
      });
      Swal.fire({
        ...defaultConfig,
        icon: "success",
        title: "User Update Successfully",
      });
      setEmployeeID();
      setRoleID();
      setName("");
      setUsername("");
      setBirthDay();
      setAddress("");
      setPhoneNo("");
      setPassword("");
      setRateID();
      setSiteID();
      setBloodGroup("");
      setEmergencyPhoneNo("");
      setEmergencyName("");
    } catch (err) {
      Swal.fire({
        ...defaultConfig,
        title: "User Registation Failed",
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
      <h3>Update Details</h3>

      {/* Find a User */}
      <div className="register-container">
        <form className="filling-form">
          <div className="command">Fill in the Employee ID Below</div>

          <div className="form-group">
            <div>Employee ID</div>
            <input
              type="id"
              placeholder="employee ID"
              value={employeeID}
              onChange={(event) => {
                setEmployeeID(event.target.value);
              }}
            />
          </div>

          <button onClick={handleSelectLabor}> Search</button>
        </form>
      </div>

      {/* Update User Details */}
      <br></br>
      <div className="register-container">
        {!isEmpty && (
          <form className="register-form" style={{ width: "455px" }}>
            <div className="command">Fill in the Information Below</div>

            <div className="form-group">
              <div>Employee ID</div>
              <input
                type="id"
                name="employeeID"
                readOnly
                value={userDetails.employeeID}
                onChange={(event) => {
                  setEmployeeID(event.userDetails.employeeID);
                }}
              />
            </div>

            <div className="form-group">
              <div>Name</div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Username</div>
              <input
                type="text"
                name="usernamename"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Password</div>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            {/* <div className="form-group">
              <div>Birth Day</div>
              <input
                type="date"
                name="birthDay"
                // value={birthDay}
                onChange={(event) => {
                  const inputDate = new Date(event.target.value);
                  if (!isNaN(inputDate.getTime())) {
                    // Check if the input date is valid
                    const formattedDate = inputDate.toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                      }
                    );
                    setBirthDay(formattedDate);
                  }
                }}
              />
            </div> */}

            {/* This is used using text type for update page only */}
            <div className="form-group">
              <div>Birth Day</div>
              <input
                type="text"
                name="birthDay"
                value={birthDay} // Assuming birthDay is a string like "12/31/1995"
                onChange={(event) => {
                  setBirthDay(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Address</div>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Phone No.</div>
              <input
                type="text"
                name="phoneNo"
                value={phoneNo}
                onChange={(event) => {
                  setPhoneNo(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Job Role</div>
              <select
                id="roleID"
                name="roleID"
                value={roleID}
                onChange={(event) => {
                  const newRoleID = parseInt(event.target.value, 10);
                  setRoleID(parseInt(event.target.value, 10)); // Parse the selected value to an integer
                  // Set default value based on roleID
                  if (newRoleID === 1 || newRoleID === 2) {
                    setRateID(3);
                  } else if (newRoleID === 3) {
                    setRateID(1);
                  }
                }}
              >
                {Object.keys(roleIdOptions).map((value) => (
                  <option key={value} value={value}>
                    {roleIdOptions[value]}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <div>Salary Type</div>
              <select
                id="rateID"
                name="rateID"
                value={rateID}
                onChange={(event) => {
                  setRateID(parseInt(event.target.value, 10)); // Parse the selected value to an integer
                }}
              >
                {(roleID === 1 || roleID === 2) &&
                  Object.keys(rateIdOptionsForAdmin).map((value) => (
                    <option key={value} value={value}>
                      {rateIdOptionsForAdmin[value]}
                    </option>
                  ))}

                {roleID === 3 &&
                  Object.keys(rateIdOptionsForLabor).map((value) => (
                    <option key={value} value={value}>
                      {rateIdOptionsForLabor[value]}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group">
              <div>Blood Group</div>
              <select
                id="rateID"
                name="rateID"
                value={bloodGroup}
                onChange={(event) => {
                  setBloodGroup(event.target.value);
                }}
              >
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="form-group">
              <div>Site</div>
              <select
                id="siteID"
                name="siteID"
                value={siteID}
                onChange={(event) => {
                  setSiteID(parseInt(event.target.value, 10)); // Parse the selected value to an integer
                }}
              >
                {Object.keys(siteIdOptions).map((value) => (
                  <option key={value} value={value}>
                    {siteIdOptions[value]}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <div>Emerge Name</div>
              <input
                type="text"
                name="emergencyName"
                value={emergencyName}
                onChange={(event) => {
                  setEmergencyName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Emerg Phone No</div>
              <input
                type="text"
                name="emergencyPhoneNo"
                value={emergencyPhoneNo}
                onChange={(event) => {
                  setEmergencyPhoneNo(event.target.value);
                }}
              />
            </div>

            <button onClick={handleSubmit}>Update</button>
          </form>
        )}
      </div>
    </>
  );
};

export default RegisterUser;
