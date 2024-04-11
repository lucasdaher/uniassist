import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Request from "./pages/request/request";
import SuccessRequest from "./components/request/successRequest";
import App from "./App";
import Tools from "./pages/app/tools/tools";
import Profile from "./pages/profile/profile";
import Benefits from "./pages/app/benefits/benefits";
import Error from "./pages/error/error";
import Curriculum from "./pages/app/tools/curriculum/curriculum";
import ProjectPresentation from "./components/presentation/projectPresentation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/project-presentation",
    element: <ProjectPresentation />,
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
    element: <Benefits />,
  },
  {
    path: "/app/tools",
    element: <Tools />,
  },
  {
    path: "/app/tools/curriculum",
    element: <Curriculum />,
  },
  {
    path: "/app/profile",
    element: <Profile />,
  },
]);
