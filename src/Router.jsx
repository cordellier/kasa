import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import AboutPage from "./pages/AboutPage";
import LogementPage from "./pages/Logementpage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <AboutPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/logements/:id",
      element: (
        <LogementPage />
      )
    }
  ]);

  export default router