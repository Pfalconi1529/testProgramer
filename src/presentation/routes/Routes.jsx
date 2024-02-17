import { createBrowserRouter } from "react-router-dom";
import App from "../components/pages/public/App";
import Error404 from "../components/pages/public/error/Error404";
import Home from "../components/pages/public/home/Home";
import FrontEnd from "../components/pages/public/front-end/FrontEnd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/front",
        element: <FrontEnd />,
      },
    ],
  },
]);

export default router;
