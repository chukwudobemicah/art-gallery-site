import { Fragment } from "react";
// import { useRouteError } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Fragment>
      <p>Error page!</p>
      <p>Go back to Our art gallery!</p>
      <i>{error.statusText || error.message}</i>
    </Fragment>
  );
};

export default ErrorPage;
