import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage.jsx";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/aboutus",
    element: <AboutUsPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
