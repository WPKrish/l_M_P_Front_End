import React from "react";
import Main from "../assest/main.png";
import "../styles/home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mt-4 home-container">
        <h2
          className="home-title"
          style={{ color: "#26495B", marginTop: "10px" }}
        >
          M Labouring System
        </h2>

        <p className="home-description">
          "Welcome to our Labor Management System, where efficiency meets
          excellence{" "}
        </p>
        <p>
          Our platform is designed to streamline workforce management, providing
          you with powerful tools to optimize productivity, manage schedules,
          and empower your team. With user-friendly features and robust
          functionality, our system is the key to achieving seamless labor
          management. Take control of your workforce, enhance collaboration, and
          elevate your business to new heights with our cutting-edge Labor
          Management System."
        </p>
      </div>

      <div className="home-image-container">
        <img src={Main} alt="Description" className="home-image" />
      </div>
    </React.Fragment>
  );
};

export default Home;
