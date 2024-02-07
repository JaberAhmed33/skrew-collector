import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StarterPage from "./components/StarterPage.jsx";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StarterPage />,
  },
  {
    path: "gameTable/:count",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="bg-main-30 h-screen w-screen">
      <Navbar />
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
