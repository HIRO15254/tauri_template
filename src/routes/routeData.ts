import {MainPage} from "../pages/MainPage.tsx";
import {RouteProps} from "react-router-dom";

export const routeData = [
  {
    path: "/",
    Component: MainPage
  }
] as const satisfies RouteProps[];
