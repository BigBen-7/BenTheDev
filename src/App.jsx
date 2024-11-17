/* eslint-disable no-unused-vars */
/// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
// import Projectpage from "./pages/Projectpage";
// import Aboutpage from "./pages/Aboutpage";
// import Contactpage from "./pages/Contactpage";
import Layout from "./layout/Layout";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Main layout wraps other pages
      children: [
        { index: true, element: <Homepage /> },
        // { path: "about", element: <Aboutpage /> },
        // { path: "project", element: <Projectpage /> },
        // { path: "contact", element: <Contactpage /> },
      ],
    },
    { path: "*", element: <NotFound /> }, // Catch-all for unknown routes
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

