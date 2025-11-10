import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Apps from "../Pages/Apps.jsx";
import Installation from "../Pages/Installation.jsx";
import AppDetails from "../Pages/AppDetails.jsx"; // ✅ নতুন import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout (Navbar, Footer)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/app/:id", // ✅ নতুন Route for details page
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
