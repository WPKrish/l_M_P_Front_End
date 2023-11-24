// Default.layout.js
import React from "react";
import GuessNavBar from "../components/NavBar/GuessNavBar";
import Footer from "../components/Footer";
import "../styles/layout.css" // Import your CSS file for layout styles

function DefaultLayout({ children }) {
  return (
    <div className="app-wrapper">
      <GuessNavBar />
      
      <div className="content-wrapper">
        {children}
      </div>
      
      <Footer />
    </div>
  );
}

export default DefaultLayout;


