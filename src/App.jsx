import React from "react";
import { FormRegister } from "./pages/FormRegister";
import { FormLogin } from "./pages/FormLogin";
import { FormForgot } from "./pages/FormForgot";
import { HomePage } from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { PaymentDetail } from "./pages/PaymentDetail";
import { HistoryOrder } from "./pages/HistoryOrder";
import { DetailOrder } from "./pages/DetailOrder";

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
  },
  {
  path: "/historyorder",
  element: <HistoryOrder />,
},
{
  path: "/detailorder/:id",
  element: <DetailOrder />,
},

])


export const App = () => {
  return <RouterProvider router={router}/>
};
