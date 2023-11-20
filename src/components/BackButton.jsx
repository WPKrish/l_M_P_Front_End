// BackButton.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back by one step
  };

  const buttonStyle = {
    // marginLeft:"10px",
    marginTop:"5px",
    fontSize:"15px",
    padding:"5px",
    height:"35px",
    paddingLeft:"30px",
    paddingRight:"30px",
    backgroundColor: "#444444",
    textTransform: "capitalize",
    
  };

  

  return (
    <button style={{...buttonStyle}} onClick={goBack}>
      Back
    </button>
  );
};

export default BackButton;
