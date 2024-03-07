import { createBrowserRouter } from "react-router-dom";
import DashboardContainer from "./containers/dashbaord";
import DetailsContainer from "./containers/details";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardContainer />,
  },
  {
    path: "/:id",
    element: <DetailsContainer />,
  },
]);

export default appRouter;
