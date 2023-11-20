// // Sidebar.js
// import React from "react";
// import "../styles/SideBar.css"; // Import your CSS file for sidebar styles

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       {/* Add your sidebar content here */}
//       <div>Add Labor</div>
//       <div>Add Labor</div>
//       <div>Add Labor</div>
//       <div>Add Labor</div>
//       <div>Add Labor</div>
//       <div>Add Labor</div>
//       <div>Add Labor</div>
//       <div>Add Labor</div>
//     </div>
//   );
// }

// export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/SideBar.css";

const Sidebar = () => {
  return (
    <nav className='single-page-sidebar'>
      <div className='Logo'>
      </div>

      <div className='heading'>
        <h2>Single Page Dashboard</h2>
      </div>

      <ul className='nav-menu'>
        <li>
          <Link to='/single-page'>
            <i className='fas fa-home'></i>
            Home
          </Link>
        </li>
        <li>
          <Link to='/single-page/about'>
            <i className='fas fa-info'></i>
            About
          </Link>
        </li>
        {/* Add other links for your single page */}
      </ul>

     
    </nav>
  );
};

export default Sidebar;

