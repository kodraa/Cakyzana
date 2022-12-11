import React from "react";
import Home from "./components/Homepage/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SingleStar from "./components/Star/SingleStar";
import UtensilPage from "./components/SingleUntensilPage/UtensilPage";
import Utensils from "./components/Utensils/Utensils";
import Login from "./components/Login/Login";

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
    path:'/singleUtenils/:id',
    element:<UtensilPage />
  },
  {
    path:'login',
    element:<Login />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
      {/* <Utensils /> */}
      {/* <SingleUtensil/> */}
    </>
  );
}

export default App;
