import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Group, { loader as groupIdLoader } from "./routes/Group";
import Recommendations from "./routes/Recommendations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/group/:groupId",
    element: <Group />,
    loader: groupIdLoader,
  },
  {
    path: "/recommendations",
    element: <Recommendations />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
