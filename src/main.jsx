import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPages from "./components/ErrorPages";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Statistic from "./components/Statistic";
import JobApplied from "./components/JobApplied";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages></ErrorPages>,
    loader: () => fetch("jobCircular.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobApplied",
        element: <JobApplied></JobApplied>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
