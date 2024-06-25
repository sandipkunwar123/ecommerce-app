import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./app/product/product.tsx";
import ProductDetail from "./app/product/product-detail.tsx";
import Users from "./assets/users/user";
import Login from "./app/login/login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
  },

  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product-detail/:productId",
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
