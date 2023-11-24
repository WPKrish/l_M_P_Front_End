import React from "react";
import BackButton from "../components/BackButton";

const Contact = () => {
  return (
    <React.Fragment>
      <div>
        <BackButton />
      </div>
      <div className="container mt-4 home-container">
        <h2
          className="home-title"
          style={{ color: "#26495B", marginTop: "10px", marginBottom: "15px" }}
        >
          M Construction Contact Details
        </h2>
        <p className="home-description">
          M Construction, a company that offers construction services in Sri
          Lanka. Here is a possible description for this page:{" "}
        </p>
        <br></br>

        <div>
          <p>
            <strong className="boldFont">Contact : </strong>The page provides
            the company’s contact information, such as address, phone number,
            email, and social media links. It also invites potential customers
            to request a quote or schedule a consultation.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="details">
        <strong className="boldFont">Email : </strong>
        <a href="https://google.com" style={{ textDecoration: "none" }}>
          mconstruction@gmail.com
        </a>
      </div>
      <div className="details">
        <strong className="boldFont">Tel : </strong>011 1234567
      </div>
      <div className="details">
        <strong className="boldFont">Fax : </strong>011 1234567
      </div>
      <div className="details">
        <strong className="boldFont">Facebook : </strong>
        <a href="https://facebook.com/login" style={{ textDecoration: "none" }}>
          M Construction
        </a>
      </div>
      <div className="details">
        <strong className="boldFont">Youtube : </strong>
        <a href="https://youtube.com" style={{ textDecoration: "none" }}>
          M Construction
        </a>
      </div>
    </React.Fragment>
  );
};

export default Contact;
