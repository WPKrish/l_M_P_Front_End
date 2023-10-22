import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Layout from './components/Layout';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Supervisor from "./pages/Supervisor";
import Labor from "./pages/Labor";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/labor" element={<Labor />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};

export default App;
