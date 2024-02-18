import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Contact from "./components/page/contact.jsx";
import Gallery from "./components/page/gallery.jsx";
import Aboutpage from "./components/page/aboutpage.jsx";
import Tourist from "./components/page/tourist.jsx";


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/vinyasaresidency.com",
    element: <App />,
  },

  {
    path: "/vinyasaresidency.com/contact",
    element: <Contact />,
  },

  {
    path: "/vinyasaresidency.com/gallery",
    element: <Gallery />,
  },
  {
    path: "/vinyasaresidency.com/about",
    element: <Aboutpage />,
  },
  {
    path: "/vinyasaresidency.com/places",
    element: <Tourist />,
  },
]);

 
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
 
);
 
