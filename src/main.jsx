import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import App from "./App";
// import Body from "./components/Body/Body";
import ErrorPage from "./components/pages/ErrorPage";
// import Location from "./components/pages/location/Location";
// import Home from "./components/Body/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   { path: "location", element: <Location /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
