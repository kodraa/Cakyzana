import React, { useState } from "react";
import Home from "./components/Homepage/Home";
import TestCarousel from "./components/Homepage/Classes/TestCarousel";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SingleClass from "./components/Star/SingleClass";
import UtensilPage from "./components/SingleUntensilPage/UtensilPage";
import Utensils from "./components/Utensils/Utensils";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { CartContext, ModalContext } from "./context";
import CartPage from "./components/Cart/CartPage";
import Classes from "./components/Classes/Classes";
import ClassCategory from "./components/ClassCategory/ClassCategory";
import AuthProvider from "./AuthContext";
import TestDynamicCarousel from "./TestDynamicCarousel";
import MultipleRowComponent from "./components/globalComponents/MultipleRowComponent";
import ModifyClasses from "./components/AdminPanel/ModifyClasses";

// todo profile

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/singleClass/:id",
    element: <SingleClass />,
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
    path: "/classes/:category",
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
  {
    path: "/testDynamic",
    element: <TestDynamicCarousel />,
  },
  {
    path: "/multipleRow",
    element: <MultipleRowComponent />,
  },
  {
    path: "/modifyClasses",
    element: <ModifyClasses />,
  }
]);

function App() {
  const [cart, setCart] = useState({
    total: 0,
    items: [],
  });

  return (
    <>
      {/* <AuthProvider> */}
        <CartContext.Provider value={[cart, setCart]}>
          <RouterProvider router={router} />
        </CartContext.Provider>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
