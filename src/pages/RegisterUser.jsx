import axios from "axios";
import { useState } from "react";
import "../styles/Register.css";
import UserProfile from "../components/UserProfile";
import {
  adminRateIdOptions,
  labourateIdOptions,
  rateIdOptions,
  rateIdOptionsForAdmin,
  rateIdOptionsForLabor,
  supervisorRateIdOptions,
} from "../constant/App.constant";
import { roleIdOptions } from "../constant/App.constant";
import { siteIdOptions } from "../constant/App.constant";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState(null);
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [roleID, setRoleID] = useState(1);
  const [rateID, setRateID] = useState(3);
  const [siteID, setSiteID] = useState(1);
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [emergencyPhoneNo, setEmergencyPhoneNo] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  // const [salaryArr, setSalaryArr] = useState([]);

  const isSimpleUsername = (username) => {
    // Define a regular expression pattern for simple characters (alphabets, numbers, underscores)
    const pattern = /^[a-z]+$/;
    return pattern.test(username);
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
      // alert("Please fill in all the required fields");
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      return; // Prevent further execution
    }

    // Additional check for simple username
    if (!isSimpleUsername(username)) {
      // alert("Username can only contain simple characters");
      Swal.fire({
        ...defaultConfig,
        title: "Username can only contain simple characters",
      });
      return;
    }

    try {
      await axios.post("http://localhost:8080/user", {
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
      // alert("User Registation Successfully");
      Swal.fire({
        ...defaultConfig,
        icon:"success",
        title: "User Registation Successfully",
      });
      setRoleID();
      setUsername("");
      setName("");
      setBirthDay();
      setAddress("");
      setPhoneNo("");
      setPassword("");
      setRateID();
      setSiteID();
      setBloodGroup("");
      setEmergencyPhoneNo("");
      setEmergencyName("");
      // setSalaryArr([]);
    } catch (err) {
      // alert("User Registation Failed");
      Swal.fire({
        ...defaultConfig,
        title: "User Registation Failed",
      });
    }
  };

  // const roleIdOptions = {
  //   1: "Admin",
  //   2: "Supervisor",
  //   3: "Labor",
  // };

  // const rateIdOptions = {
  //   1: "Skilled Labor",
  //   2: "Non Skilled Labor",
  //   3: "Officer",
  // };

  // const siteIdOptions = {
  //   1: "Colombo 2",
  //   2: "Dehevala",
  // };

  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
  const userRole = JSON.parse(localStorage.getItem("role"));

  // const jobRoleHandler = (event) => {

  //   // const jobRoleId = event.target.value;
  //   // setRoleID(jobRoleId);

  //     setRoleID(event.target.value);

  //   // if role admin -> admin arr
  //   // if role labour -> labour arr

  //   let tempArr = [];

  //   if (roleID === 1) {
  //     tempArr = adminRateIdOptions;
  //   } else if (roleID === 2) {
  //     tempArr = supervisorRateIdOptions;
  //   } else {
  //     tempArr = labourateIdOptions;
  //   }

  //   setSalaryArr(tempArr);

  //   setRateID(tempArr?.id);
  // };

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
      <h3>Registration Form</h3>

      <div className="register-container">
        <form className="register-form" /*onSubmit={handleSubmit}*/>
          {/* <h3>User Registration</h3> */}
          <div className="command">Fill in the Information Below</div>

          <div className="form-group">
            <div>Name</div>
            <input
              type="text"
              name="name"
              placeholder="name"
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
              placeholder="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <div>Password</div>
            <input
              // className="form-control"
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
              dateFormat="dd/MM/yy"
              placeholder="format : dd/mm/yy"
              onChange={(event) => {
                setBirthDay(event.target.value);
              }}
            />
          </div> */}

          <div className="form-group">
            <div>Birth Day</div>
            <input
              type="date"
              name="birthDay"
              onChange={(event) => {
                const inputDate = new Date(event.target.value);
                if (!isNaN(inputDate.getTime())) {
                  // Check if the input date is valid
                  const formattedDate = inputDate.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  });
                  setBirthDay(formattedDate);
                }
              }}
            />
          </div>

          <div className="form-group">
            <div>Address</div>
            <input
              type="text"
              name="address"
              placeholder="address"
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
              placeholder="phone Number"
              onChange={(event) => {
                setPhoneNo(event.target.value);
              }}
            />
          </div>

          {/* <div className="form-group">
            <div>Salary Type</div>
            <select
              id="rateID"
              name="rateID"
              onChange={(event) => {
                setRateID(parseInt(event.target.value, 10)); // Parse the selected value to an integer
              }}
            >
              {Object.keys(rateIdOptions).map((value) => (
                <option key={value} value={value}>
                  {rateIdOptions[value]}
                </option>
              ))}
            </select>
          </div> */}

          {/* <div className="form-group">
            <div>Salary Type</div>
            <select
              id="rateID"
              name="rateID"
              // value={}
              onChange={(event) => {
                setRateID(parseInt(event.target.value, 10)); // Parse the selected value to an integer
              }}
            >
              {salaryArr.map((salary, i) => {
                return (
                  <option key={i} value={salary.id}>
                    {salary.label}
                  </option>
                );
              })}
            </select>
          </div> */}

          <div className="form-group">
            <div>Job Role</div>
            <select
              id="roleID"
              name="roleID"
              value={roleID}
              onChange={(event) => {
                setRoleID(parseInt(event.target.value, 10)); // Parse the selected value to an integer
                const jobRoleId = event.target.value;
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
              
              {Object.keys(rateIdOptions).map((value) => (
                <option key={value} value={value}>
                  {rateIdOptions[value]}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <div>Blood Group</div>
            <select
              id="rateID"
              name="rateID"
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

          {/* <div className="form-group">
            <div>Site</div>
            <input
              type="text"
              name="siteName"
              //   placeholder="site name"
              onChange={(event) => {
                setSiteID(event.target.value);
              }}
            />
          </div> */}
          <div className="form-group">
            <div>Site</div>
            <select
              id="siteID"
              name="siteID"
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
              placeholder="emergency contact person Name"
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
              placeholder="emergency contact person PhoneNo"
              onChange={(event) => {
                setEmergencyPhoneNo(event.target.value);
              }}
            />
          </div>

          <button onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterUser;
