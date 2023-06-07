import { createBrowserRouter ,Outlet } from "react-router-dom";



//pages
import Landing from "../pages/Landing";
import Error from "../pages/Error";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
      errorElement:<Error/>
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
    {
        path: "/register",
        element: <div>Register</div>,
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