import {createBrowserRouter, RouterProvider} from "react-router-dom";
import{Outlet} from "react-router-dom";
import HomePage from "./pages/HomePage";

const HeaderLayout = () => (
  <div classname = "body">
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
