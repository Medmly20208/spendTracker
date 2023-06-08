import { createBrowserRouter ,Outlet } from "react-router-dom";



//pages
import Landing from "../pages/Landing";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
      errorElement:<Error/>
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/forgot-password",
        element: <div>ForgotPassword</div>,
    },
    {
        path: "/reset-password",
        element: <div>ResetPassword</div>,
    },
     {
        path:"/user",
        element:<><div>User</div> <Outlet/></>,
        children:[
            {  
                path: "dashboard",
                element: <div>Dashboard</div>,
            },
            {
                path: "profile",
                element: <div>Profile</div>,
            },
            {
                path: "notifications",
                element: <div>Notifications</div>,
            },
            {
                path: "reports",
                element :<div>Reports</div>
            },
            {
                path: "chat",
                element :<div>Chat</div>
            },
            {
                path: "financeAdvisor",
                element :<div>Finance Advisor</div>
            }
        ]

     }
      
    ,
   
  ]);