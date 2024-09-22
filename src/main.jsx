import  { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./Component/Root.jsx";
import HomePage from "./Component/Homepage.jsx";
import ErrorPage from "./Component/ErrorPage.jsx";
import Banner from "./Component/Banner.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
     
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
