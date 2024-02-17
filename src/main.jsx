/**
 * todo: Handle aplication
 *
 */

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./presentation/routes/Routes.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
