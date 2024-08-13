import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import ContractPage from "./Pages/ContractPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import ViewProccess from "./Pages/ViewProccess.jsx";
import PartnersPage from "./Pages/PartnersPage.jsx";
import LivingPage from "./Pages/LivingPage.jsx";
import ClosetPage from "./Pages/ClosetPage.jsx";
import BathsPage from "./Pages/BathsPage.jsx";
import KitchenPage from "./Pages/KitchenPage.jsx";
import TotalPage from "./Pages/TotalPage.jsx";
import BookaAppointment from "./Pages/BookaAppointment.jsx";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/aboutus",
    element: <AboutUsPage/>
  },
  {
    path:"/contract",
    element: <ContractPage/>
  },
  {
    path:"/contact",
    element: <ContactPage/>
  },
  {
    path:"/portfolio",
    element: <PortfolioPage/>
  },
  {
    path:"/viewProcess",
    element: <ViewProccess/>
  },
  {
    path:"/learnmore",
    element: <PartnersPage/>
  },
  {
    path:"/living",
    element: <LivingPage/> ,
  },
  {
    path:"/Closets",
    element: <ClosetPage/> ,
  },
  {
    path:"/bath",
    element: <BathsPage/> ,
  },
  {
    path:"/kitchen",
    element: <KitchenPage/> ,
  },
  {
    path:"/totallook",
    element: <TotalPage/> ,
  },
  {
    path:"/bookaAppointment",
    element: <BookaAppointment/> ,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
