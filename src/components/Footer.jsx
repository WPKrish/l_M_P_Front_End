import React from "react";

export const mainFooterDiv = {
  display:"flex",
  justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#343a40", 
    color: "white",
    text: "center",
    position:"fixed", 
    bottom:"0px",    
    
}



const Footer = () => {
  return (
    <footer style={mainFooterDiv}>
      <div style={{alignContent:"center", marginBottom: "0" }}>
        <pd>&copy; {new Date().getFullYear()} M Labouring System</pd>
      </div>
    </footer>
  );
};

export default Footer;



// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light text-center py-3"
//     style={{height:"50px", position:"fixed", bottom:"0px", width:"100%"}}>
//       <div className="container">
//         <p>&copy; {new Date().getFullYear()} M Labouring System</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
