import { Fragment } from "react";
import Header from "../Header.jsx";
import Body from "./Body.jsx";
import Footer from "../Footer.jsx";
// import Header from "../Header.jsx";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};

export default Home;
