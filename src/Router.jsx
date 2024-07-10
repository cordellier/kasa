import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import AboutPage from "./pages/AboutPage";

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
  ]);

  export default router