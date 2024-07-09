import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
  ]);

  export default router