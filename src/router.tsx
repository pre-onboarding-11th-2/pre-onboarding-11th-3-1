import { createBrowserRouter } from "react-router-dom";
import Detail from "./Pages/Detail";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
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
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
      errorElement: <Error />,
    };
  })
);
