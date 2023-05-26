import { Fragment } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import "./resets.scss";
import Footer from "./components/Footer";
// import Home from "./components/Body/Home";
// import Location from "./components/pages/location/Location";
// import car from "./components/car";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   { path: "location", element: <Location /> },
// ]);

{
  /* <RouterProvider router={router} /> */
}

const App = () => {
  // return <Home />;
  return (
    <Fragment>
      <p>app</p>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};

export default App;
