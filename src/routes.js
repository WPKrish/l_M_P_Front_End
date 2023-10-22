import DefaultLayout from "./layouts/Default.layout";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Labor from "./pages/Labor";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Supervisor from "./pages/Supervisor";

//define the routes
const routes = [
 {
  path: "/labor",
  exact: true,
  component: Labor,
  layout: DefaultLayout
 },
 {
  path: "/supervisor",
  exact: true,
  component: Supervisor,
  layout: DefaultLayout
 },
 {
  path: "/admin",
  exact: true,
  component: Admin,
  layout: DefaultLayout
 },
 {
  path: "/contact",
  exact: true,
  component: Contact,
  layout: DefaultLayout
 },
 {
  path: "/about",
  exact: true,
  component: About,
  layout: DefaultLayout
 },
 {
  path: "/register",
  exact: true,
  component: Register,
  layout: DefaultLayout
 },
 {
 path: "/login",
 exact: true,
 component: Login,
 layout: DefaultLayout
},
{
 path: "/",
 exact: true,
 component: Home,
 layout: DefaultLayout
},

];

export default routes;