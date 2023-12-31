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
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('featuredJobs.json')
      },
      {
        path: 'Home',
        element: <Home></Home>,
        loader: () => fetch('featuredJobs.json')
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
      {
        path: 'JobDetails',
        element: <JobDetails></JobDetails>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);