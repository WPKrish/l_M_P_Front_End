import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container mt-4 home-container">
        <h2 className="home-title" style={{color:"#26495B", marginTop:"10px", marginBottom:"15px"}}>Contact Details</h2>
        <p className="home-description">
          Prageeth Construction, a company that offers construction services in
          Sri Lanka. Here is a possible description for this page:{" "}
        </p>
        <br></br>

        <div>
          <p>
            <strong className="boldFont">Contact : </strong>The
            page provides the company’s contact information, such as address,
            phone number, email, and social media links. It also invites
            potential customers to request a quote or schedule a consultation.
          </p>
        </div>
      </div>
      <br></br><br></br>
      <div className="details"><strong className="boldFont">Email : </strong>prageethconstruction@gmail.com</div>
      <div className="details"><strong className="boldFont">Tel : </strong>011 1234567</div>
      <div className="details"><strong className="boldFont">Fax : </strong>011 1234567</div>
      <div className="details"><strong className="boldFont">Facebook : </strong>Prageeth Construction</div>
      <div className="details"><strong className="boldFont">Youtube : </strong>Prageeth Construction</div>

    </React.Fragment>
  );
};

export default Contact;
