import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <MainLayout />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
