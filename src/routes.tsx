import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
]);

const Router = () => <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;

export default Router;