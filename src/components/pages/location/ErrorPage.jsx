import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // const error = useRouteError();

  return (
    <Fragment>
      <p>Error page!</p>
      <p>Go back to Our art gallery!</p>
    </Fragment>
  );
};

export default ErrorPage;
