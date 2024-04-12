import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/home";
import Request from "./pages/request/request";
import SuccessRequest from "./components/request/successRequest";
import App from "./App";
import Tools from "./pages/app/tools/tools";
// import Benefits from "./pages/app/benefits/benefits";
import Error from "./pages/error/error";
import Curriculum from "./pages/app/tools/curriculum/curriculum";
import Profile from "./pages/profile/profile";
import Presentation from "./pages/projectPresentation/presentation";
import Todolist from "./pages/app/tools/todolist/todolist";
import Qrcode from "./pages/qrcode/qrcode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/project-presentation",
    element: <Presentation />,
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
    path: "/app/benefits",
    element: <Todolist />, // voltar para Benefits
  },
  {
    path: "/app/tools",
    element: <Tools />,
  },
  {
    path: "/app/profile",
    element: <Profile />,
  },
  {
    path: "/app/tools/curriculum",
    element: <Curriculum />,
  },
  {
    path: "/app/tools/todolist",
    element: <Todolist />,
  },
  {
    path: "/qrcode",
    element: <Qrcode />,
  },
]);
