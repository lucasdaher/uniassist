import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Request from "./pages/request/request";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/request-access",
    element: <Request />,
  },
]);
