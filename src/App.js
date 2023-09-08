import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Computer from "./pages/Computer";
import Multiplayer from "./pages/Multiplayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/computer",
    element: <Computer />,
  },
  {
    path: "/multiplayer",
    element: <Multiplayer />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
