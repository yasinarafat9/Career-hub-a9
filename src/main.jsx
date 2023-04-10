import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: 'Home',
        element: <Home></Home>
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'AppliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'Blog',
        element: <Blog></Blog>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);