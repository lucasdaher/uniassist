import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Request from "./pages/request/request";
import SuccessRequest from "./components/request/successRequest";
import App from "./App";
import Tools from "./pages/app/tools/tools";

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
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/app/tools",
    element: <Tools />,
  },
]);
