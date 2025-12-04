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
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Support from "../pages/Support/Support";


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
        path: "services", // All Services Page
        element: <Services />,
      },
      {
        path: "about", // About Us Page
        element: <AboutUs />,
      },
      {
        path: "contact", // Contact Page
        element: <Contact />,
      },
      {
        path: "support", // Support Page
        element: <Support />,
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
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
        // Service Details এখন পাবলিক (PrivateRouter এর বাইরে)
        path: "services/:serviceId",
        element: <ServiceDetails />, 
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;