import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div className="container mt-4 home-container">
        <h2 className="home-title" style={{color:"#26495B", marginTop:"10px", marginBottom:"15px"}}>Prageeth Construction</h2>
        <p className="home-description">
          Prageeth Construction, a company that offers construction services in
          Sri Lanka. Here is a possible description for this page:{" "}
        </p>
        <br></br>

        <div>
          <p>
            <strong className="boldFont">Introduction : </strong>The page
            introduces the company’s mission, vision, and values, as well as its
            history and achievements. It also showcases some of the company’s
            projects and testimonials from satisfied clients.
          </p>
          <p>
            <strong className="boldFont">Services : </strong>The page describes
            the different types of construction services that the company
            provides, such as residential, commercial, industrial, and civil
            engineering. It also explains the company’s quality standards,
            safety measures, and environmental policies.
          </p>
          <p>
            <strong className="boldFont">Team : </strong>The page introduces
            the company’s founder and CEO, Prageeth, and his professional
            background and qualifications. It also features the profiles of the
            company’s key staff members, such as engineers, architects, and
            managers
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
