import DefaultLayout from "./layouts/Default.layout";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Labor from "./pages/Labor";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import UpdateUser from "./pages/UpdateUser";
import Supervisor from "./pages/Supervisor";
import RemoveUser from "./pages/RemoveUser";
import SupervisorList from "./pages/SupervisorList";
import LaborsList from "./pages/LaborsList";
import TodayAttendance from "./pages/TodayAttendanceList";
import MarkAttendance from "./pages/MarkAttendance";
import ThisMonthAttendances from "./pages/ThisMonthAttendances";
import ThisMonthSalary from "./pages/ThisMonthSalary";
import MonthlySalary from "./pages/MonthlySalary";
import MonthlyAttendance from "./pages/MonthlyAttendance";
import AllLaborsSalaryCostByMonth from "./pages/AllLaborsSalaryCostByMonth";
import ThisMonthAttendancesForLabor from "./pages/ThisMonthAttendancesForLabor";
import ThisMonthSalaryForLabor from "./pages/ThisMonthSalaryForLabor";
import MonthlySalaryForLabor from "./pages/MonthlySalaryForLabor";
import MonthlyAttendanceForLabor from "./pages/MonthlyAttendanceForLabor";
import MarkPoint from "./pages/MarkPoint";
import MonthlyPoint from "./pages/MonthlyPoint"
import DailyAttendance from "./pages/DailyAttendance";
import UpdateUserPassword from "./pages/UpdateUserPassword";

//define the routes
const routes = [
  {
    path: "/changepassword",
    exact: true,
    component: UpdateUserPassword,
    layout: DefaultLayout,
  },
  {
    path: "/labor",
    exact: true,
    component: Labor,
    layout: DefaultLayout,
  },
  {
    path: "/supervisor",
    exact: true,
    component: Supervisor,
    layout: DefaultLayout,
  },
  {
    path: "/admin",
    exact: true,
    component: Admin,
    layout: DefaultLayout,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
    layout: DefaultLayout,
  },
  {
    path: "/about",
    exact: true,
    component: About,
    layout: DefaultLayout,
  },

  {
    path: "/login",
    exact: true,
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: "/",
    exact: true,
    component: Home,
    layout: DefaultLayout,
  },

  //Add remove and Update
  {
    path: "/register",
    exact: true,
    component: RegisterUser,
    layout: DefaultLayout,
  },
  {
    path: "/updateuser",
    exact: true,
    component: UpdateUser,
    layout: DefaultLayout,
  },
  {
    path: "/remove",
    exact: true,
    component: RemoveUser,
    layout: DefaultLayout,
  },
  {
    path: "/getsupervisors",
    exact: true,
    component: SupervisorList,
    layout: DefaultLayout,
  },
  {
    path: "/getlabors",
    exact: true,
    component: LaborsList,
    layout: DefaultLayout,
  },
  {
    path: "/todayattendance",
    exact: true,
    component: TodayAttendance,
    layout: DefaultLayout,
  },
  {
    path: "/dailyattendance",
    exact: true,
    component: DailyAttendance,
    layout: DefaultLayout,
  },
  {
    path: "/markattendance",
    exact: true,
    component: MarkAttendance,
    layout: DefaultLayout,
  },
  {
    path: "/markpoint",
    exact: true,
    component: MarkPoint,
    layout: DefaultLayout,
  },
  {
    path: "/thismonthattendance",
    exact: true,
    component: ThisMonthAttendances,
    layout: DefaultLayout,
  },
  {
    path: "/thismonthattendanceforlabor",
    exact: true,
    component: ThisMonthAttendancesForLabor,
    layout: DefaultLayout,
  },
  {
    path: "/thismonthsalary",
    exact: true,
    component: ThisMonthSalary,
    layout: DefaultLayout,
  },
  {
    path: "/thismonthsalaryforlabor",
    exact: true,
    component: ThisMonthSalaryForLabor,
    layout: DefaultLayout,
  },
  {
    path: "/monthlysalary",
    exact: true,
    component: MonthlySalary,
    layout: DefaultLayout,
  },
  {
    path: "/monthlysalaryforlabor",
    exact: true,
    component: MonthlySalaryForLabor,
    layout: DefaultLayout,
  },
  {
    path: "/monthlyattendance",
    exact: true,
    component: MonthlyAttendance,
    layout: DefaultLayout,
  },
  {
    path: "/monthlypoints",
    exact: true,
    component: MonthlyPoint,
    layout: DefaultLayout,
  },
  {
    path: "/monthlyattendanceforlabor",
    exact: true,
    component: MonthlyAttendanceForLabor,
    layout: DefaultLayout,
  },
  {
    path: "/alllaborssalary",
    exact: true,
    component: AllLaborsSalaryCostByMonth,
    layout: DefaultLayout,
  },
];

export default routes;
