// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// // import Layout from './components/Layout';
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Admin from "./pages/Admin";
// import Supervisor from "./pages/Supervisor";
// import Labor from "./pages/Labor";
// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* <Layout> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/supervisor" element={<Supervisor />} />
//         <Route path="/labor" element={<Labor />} />
//       </Routes>
//       {/* </Layout> */}
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.layout><route.component /></route.layout>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;


