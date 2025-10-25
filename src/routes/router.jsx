import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Services from "../pages/Services/Services";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "services", 
        element: <Services />,
      },
      {
        path: "profile", 
        element: <Profile />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "forget-password", 
        element: <ForgetPassword />,
      },
      {
        path: "services/:serviceId",
        element: (
          <PrivateRouter>
            <ServiceDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "*",  
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
