import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Request from "./pages/request/request";
import SuccessRequest from "./components/request/successRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/request-access",
    element: <Request />,
  },
  {
    path: "/request-success",
    element: <SuccessRequest />,
  },
]);
