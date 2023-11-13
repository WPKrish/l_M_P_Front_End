import axios from "axios";
import { useState } from "react";
import "../styles/Register.css";
import UserProfile from "../components/UserProfile";
import { rateIdOptions } from "../constant/App.constant";
import { roleIdOptions } from "../constant/App.constant";
import { siteIdOptions } from "../constant/App.constant";

const RegisterUser = () => {
  const [employeeID, setEmployeeID] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState(null);
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [roleID, setRoleID] = useState(1);
  const [rateID, setRateID] = useState(1);
  const [siteID, setSiteID] = useState(1);
  const [bloodGroup, setBloodGroup] = useState("");
  const [emergencyPhoneNo, setEmergencyPhoneNo] = useState("");
  const [emergencyName, setEmergencyName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put("http://localhost:8080/user", {
        employeeID: employeeID,
        name: name,
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
      alert("User Registation Successfully");
      setEmployeeID();
      setRoleID();
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
    } catch (err) {
      alert("User Registation Failed");
    }
  };


  // Get saved data from local storage
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
      <h3>Update User Details</h3>
      <div className="register-container">
        <form className="register-form" /*onSubmit={handleSubmit}*/>
          {/* <h3>Update User Details</h3> */}
          <div className="command">Fill in the Information Below</div>

          <div className="form-group">
            <div>Employee ID</div>
            <input
              type="id"
              name="employeeID"
              placeholder="Employee ID"
              onChange={(event) => {
                setEmployeeID(event.target.value);
              }}
            />
          </div>

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
              //   placeholder="address"
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
              //   placeholder="phone Number"
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
              onChange={(event) => {
                setRoleID(parseInt(event.target.value, 10)); // Parse the selected value to an integer
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
              //   placeholder="emergency Name"
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
              //   placeholder="emergency PhoneNo"
              onChange={(event) => {
                setEmergencyPhoneNo(event.target.value);
              }}
            />
          </div>

          <button /*type="submit"*/ onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </>
  );
};

export default RegisterUser;
