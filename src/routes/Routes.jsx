import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";

export const router=createBrowserRouter([
{path:'/',
element:<MainLayout></MainLayout>,
errorElement:<ErrorPage></ErrorPage>,
children:[
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/my-profile",
        element:<ProtectedRoute><MyProfile></MyProfile></ProtectedRoute>
    },
    {
        path:"/update-profile",
        element:<ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute>
    },
    {
        path:"/bills",
        element:<ProtectedRoute><Bills></Bills></ProtectedRoute>
    },
    {
        path:"/bills/:id",
        element:<ProtectedRoute><BillDetails></BillDetails></ProtectedRoute>
    },
    {
        path:'/about',
        element:<About></About>

    },
    // {
    //     path: "*",
    //     element: <div className="text-center mt-20 text-2xl font-bold">404 | Page Not Found</div>,
    //   },
]
},





])