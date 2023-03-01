import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BankLogin from "./pages/Bank/BankLogin";
import "./index.css";
import CustomerLogin from "./pages/Commerce/CustomerLogin";
import ProductPage from "./pages/Commerce/ProductPage";
import ContextProvider from "./context/index.js";
import BankUser from "./pages/Bank/BankUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bank-login",
    element: <BankLogin />,
  },
  {
    path: "/customer-login",
    element: <CustomerLogin />,
  },
  {
    path: "/product-page",
    element: <ProductPage />,
  },
  {
    path: "/bank-user",
    element: <BankUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
