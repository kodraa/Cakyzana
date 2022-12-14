import React, { useState } from "react";
import Home from "./components/Homepage/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SingleStar from "./components/Star/SingleStar";
import UtensilPage from "./components/SingleUntensilPage/UtensilPage";
import Utensils from "./components/Utensils/Utensils";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import TheClasses from "./components/Homepage/Classes/TheClasses";
import { CartContext, ModalContext } from "./context"
import CartPage from "./components/Cart/CartPage";
import ClassCategory from "./components/ClassCategory/ClassCategory";

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
    path:'/singleUtensil/:id',
    element:<UtensilPage />
  },
  {
    path:'login',
    element:<Login />
  },
  {
    path:'signup',
    element:<SignUp />
  },
  {
    path:'/utensil/:id',
    element:<UtensilPage/>
  },
  {
    path:'/classes',
    element:<ClassCategory/>
  },
  {
    path:'/cart',
    element:<CartPage/>
  },

]);

function App() {

  const [cart, setCart] = useState({
    total: 0,
    items: []
  });


  return (
    <>
    <CartContext.Provider value={[cart,setCart]}>
        <RouterProvider router={router} />
    </CartContext.Provider>
      {/* <Home /> */}
      {/* <Utensils /> */}
      {/* <SingleUtensil/> */}
    </>
  );
}

export default App;
