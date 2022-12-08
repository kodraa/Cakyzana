import React from "react";
import Home from "./components/Homepage/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SingleStar from "./components/Star/SingleStar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/star",
    element: <SingleStar />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </>
  );
}

export default App;
