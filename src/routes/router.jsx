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

// Placeholder components for new routes
const About = () => <div className="py-20 text-center text-3xl font-bold text-amber-900">About Us Page Coming Soon</div>;
const Contact = () => <div className="py-20 text-center text-3xl font-bold text-amber-900">Contact Us Page Coming Soon</div>;
const Support = () => <div className="py-20 text-center text-3xl font-bold text-amber-900">Support Page Coming Soon</div>;

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
        path: "services", // This acts as "All Items"
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "support",
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
      // Service Details বের করে আনা হয়েছে PrivateRouter থেকে
      {
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