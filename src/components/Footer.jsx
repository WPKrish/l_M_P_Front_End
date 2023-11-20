import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3"
    style={{height:"50px", position:"fixed", bottom:"0px", width:"100%"}}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} M Labouring System</p>
      </div>
    </footer>
  );
};

export default Footer;
