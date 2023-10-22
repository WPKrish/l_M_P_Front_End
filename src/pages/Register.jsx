import NavBarWithLogout from "../components/NavBarWithLogout";
import axios from "axios";
import { useState } from "react";
import "./Register.css";

// const Register = () => {

//   return (
//     <>
//       <NavBarWithLogout />
//       <div className="container mt-4">This is Register page</div>
//     </>
//   );
// };


const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [roleID, setRoleID] = useState(0);
  const [rateID, setRateID] = useState(0);
  const [siteName, setSiteName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [emergencyPhoneNo, setEmergencyPhoneNo] = useState("");
  const [emergencyName, setEmergencyName] = useState("");


    const handleSubmit = async (event) =>{
//   async function handleSubmit(event) {
    event.preventDefault();
    

    try {
      await axios.post("http://localhost:8080/user", {
        name: name,
        password: password,
        birthDay: birthDay,
        address: address,
        phoneNo: phoneNo,
        roleID: roleID,
        rateID: rateID,
        siteName: siteName,
        bloodGroup: bloodGroup,
        emergencyPhoneNo: emergencyPhoneNo,
        emergencyName: emergencyName,
      });
      alert("User Registation Successfully");
      setRoleID();
      setName("");
      setBirthDay("");
      setAddress("");
      setPhoneNo("");
      setPassword("");
      setRateID();
      setSiteName("");
      setBloodGroup("");
      setEmergencyPhoneNo("");
      setEmergencyName("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  return (
    <>
      <NavBarWithLogout />
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <br></br>
          <h3>Register Supervisor</h3>
          <div>Fill in the Information Below</div>

          <div className="form-group">
            <div>Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
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

          <div className="form-group">
            <div>Birth Day</div>
            <input
              type="text"
              name="birthDay"
              placeholder="format : dd/mm/yy"
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

          {/* <div className="form-group">
            <div>Job Role ID</div>
            <input
              type="text"
              name="roleID"
              value="2" // Set the default value here
              placeholder="2:Supervisor , 3:Labor"
              disabled // Disable the input field to make it unchangeable
              onChange={(event) => {
                setRoleID(event.target.value);
              }}
            />
          </div> */}

          <div className="form-group">
            <div>Role ID</div>
            <input
              type="text"
              name="roleID"
            //   placeholder="blood group"
              onChange={(event) => {
                setRoleID(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <div>RateID</div>
            <input
              type="text"
              name="rateID"
            //   placeholder="site name"
              onChange={(event) => {
                setRateID(event.target.value);
              }}
            />
          </div>
          


          <div className="form-group">
            <div>Blood Group</div>
            <input
              type="text"
              name="bloodGroup"
            //   placeholder="blood group"
              onChange={(event) => {
                setBloodGroup(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <div>Site</div>
            <input
              type="text"
              name="siteName"
            //   placeholder="site name"
              onChange={(event) => {
                setSiteName(event.target.value);
              }}
            />
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
            <div>Emerg P No</div>
            <input
              type="text"
              name="emergencyPhoneNo"
            //   placeholder="emergency PhoneNo"
              onChange={(event) => {
                setEmergencyPhoneNo(event.target.value);
              }}
            />
          </div>

          

          <button type="submit">Register</button>
        </form>
        
      </div>
      
    </>
  );
};

export default Register;
