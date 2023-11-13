import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home"; 
import Contactus from "../Pages/ContactUs/Contact/Contactus";
import Deshbord from "../Pages/Dashbord/Deshbord/Deshbord";
import Ourshop from "../Pages/OurShop/OurShop/Ourshop";
import SignOut from "../Pages/SignOut/SignOut/SignOut";
import OurMenu from "../Pages/Menu/OurMenu/OurMenu";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/contact",
                element: <Contactus/>
            },
            {
                path:"/dashboard",
                element:<Deshbord/>
            },
            {
                path:"/menu",
                element:<OurMenu/>
            },
            {
                path:"/ourshop/:category",
                element:<Ourshop/>
            },
            {
                path:"signout",
                element:<SignOut/>
            }

        ]
    },
]);