import { Fragment } from "react";

const ButtonBackwards = (props) => {
  return (
    <Fragment>
      <button>{props.message}</button>
    </Fragment>
  );
};

export default ButtonBackwards;
