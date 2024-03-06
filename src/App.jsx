import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "./FirstPage";
import SinglePage from "./SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstPage />,
      errorElement: <div>404 Error</div>,
    },
    {
      path: "star/:id",
      element: <SinglePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
