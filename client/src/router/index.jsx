import { createBrowserRouter ,Outlet } from "react-router-dom";



//components
import Notifications from "../components/Notifications";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Reports from "../components/Reports";
import Chat from "../components/Chat";
import News from "../components/News";



//pages
import Landing from "../pages/Landing";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Container from "../components/Container";




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
        element:<Container/>,
        children:[
            {  
                path: "dashboard",
                element: <Dashboard/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            },
            {
                path: "notifications",
                element: <Notifications/>,
            },
            {
                path: "reports",
                element :<Reports/>
            },
            {
                path: "chat",
                element :<Chat/>
            },
          
            {
                path:"news",
                element:<News/>

            }
        ]

     }
      
    ,
   
  ]);