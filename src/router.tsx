import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Error from "./pages/error";
import GeneralLayout from "./layout/GeneralLayout";

interface RouterBase {
  path: string;
  element: React.ReactNode;
}

const routerData: RouterBase[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
      errorElement: <Error />,
    };
  }),
  { basename: process.env.PUBLIC_URL }
);
