import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import ToyDetails from "../pages/ToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/toy/:id",
                element: <ToyDetails />,
            },
        ],
    },
]);

export default router;
