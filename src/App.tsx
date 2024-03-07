import { HeaderComponent } from "./components/header";
import appRouter from "./app-route";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderComponent title={"High-School Dashboard"} />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
