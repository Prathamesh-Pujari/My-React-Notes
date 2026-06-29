import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout.jsx";
import Products from "./components/Products.jsx";
import Animals from "./components/Animals.jsx";
import Fruits from "./components/Fruits.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "animals",
        element: <Animals />,
      },
      {
        path: "fruits",
        element: <Fruits />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
