import React from "react";
import { FormRegister } from "./pages/FormRegister";
import { FormLogin } from "./pages/FormLogin";
import { FormForgot } from "./pages/FormForgot";
import { HomePage } from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { PaymentDetail } from "./pages/PaymentDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/ProductPage',
    element: <ProductPage/>
  },
  {
    path: '/Product/:title',
    element:<ProductDetail/>
  },
  {
    path: '/payment',
    element: <PaymentDetail/>
  }
])


export const App = () => {
  return <RouterProvider router={router}/>
};
