import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Services from "../pages/Services/Services";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";

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
        path: "SignUp", // route -> "/profile"
        element: <SignUp/>,
      },
      {
        path: "Login", // route -> "/profile"
        element: <Login />,
      },
    ],
  },
]);

export default router;
