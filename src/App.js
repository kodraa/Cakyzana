import React, { useState } from "react";
import Home from "./components/Homepage/Home";
import TestCarousel from "./components/Homepage/Classes/TestCarousel";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SingleStar from "./components/Star/SingleStar";
import UtensilPage from "./components/SingleUntensilPage/UtensilPage";
import Utensils from "./components/Utensils/Utensils";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { CartContext, ModalContext } from "./context";
import CartPage from "./components/Cart/CartPage";
import Classes from "./components/Classes/Classes";
import ClassCategory from "./components/ClassCategory/ClassCategory";
import { AuthProvider } from "./AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/star",
    element: <SingleStar />,
  },
  {
    path: "/utensils",
    element: <Utensils />,
  },
  {
    path: "/singleUtensil/:id",
    element: <UtensilPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/utensil/:id",
    element: <UtensilPage />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
  {
    path: "/classcategory",
    element: <ClassCategory />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/test",
    element: <TestCarousel />,
  },
]);

function App() {
  const [cart, setCart] = useState({
    total: 0,
    items: [],
  });

  return (
    <>
      <AuthProvider>
        <CartContext.Provider value={[cart, setCart]}>
          <RouterProvider router={router} />
        </CartContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
