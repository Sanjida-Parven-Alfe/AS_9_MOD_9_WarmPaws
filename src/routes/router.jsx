import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Services from "../pages/Services/Services";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // default route -> "/"
        element: <HomePage />,
      },
      {
        path: "services", // route -> "/services"
        element: <Services />,
      },
      {
        path: "profile", // route -> "/profile"
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
        path: "services/:serviceId",
        element: (
          <PrivateRouter>
            <ServiceDetails />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
