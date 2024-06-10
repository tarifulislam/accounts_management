
import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Accound from "../Pages/Accound/Accound";
import DashLayout from "../Layout/DashLayout";
import DashHome from "../Pages/DashBoard/DashHome/DashHome";
import Buses from "../Pages/DashBoard/Buses/Buses";
import DashAccound from "../Pages/DashBoard/DashAccound/DashAccound";
import Glance from "../Pages/DashBoard/Glance/Glance";
import Salary from "../Pages/DashBoard/Salary/Salary";
  
  
  const webRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "accound",
            element: <Accound></Accound>
        },
      ]
    },
    {
        path: "/dashboard",
        element: <DashLayout></DashLayout>,
        children: [
            {
                path: "/dashboard",
                element: <DashHome></DashHome>
            },
            {
                path: "/dashboard/buses",
                element: <Buses></Buses>
            },
            {
                path: "/dashboard/dashaccound",
                element: <DashAccound></DashAccound>
            },
            {
                path: "/dashboard/glance",
                element: <Glance></Glance>
            },
            {
                path: "/dashboard/salary",
                element: <Salary></Salary>
            },
        ]
    }
  ]);

  export default webRouter