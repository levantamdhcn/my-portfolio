import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <MainLayout />;
    },
  },
]);

const Router = () => <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;

export default Router;