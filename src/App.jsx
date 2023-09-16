import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MovieApp from "./components/MovieApp";
import CardDetails from "./components/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieApp />,
  },
  {
    path: "/movie/:movieId",
    element: <CardDetails />,
  },
]);

function App() {
  return (
    <>
      <div className="flex  flex-col justify-center items-center">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
