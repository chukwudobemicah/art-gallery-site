import { Fragment } from "react";
import styles from "./Button.module.scss";
import rightArrow from "/assets/img/icon-arrow-left.svg";
import { Link } from "react-router-dom";

const Button = (props) => {
  const classes = `${styles["button-container"]} ${
    styles[`${props.className}`]
  }`;
  const btnClass = `${styles[props.className]}`;
  const link = props.className ? "/" : "location";
  return (
    <Fragment>
      <div className={classes}>
        <Link to={link}>
          <div className={btnClass}>
            <button>{props.message}</button>
            <div className={styles["right-arrow-container"]}>
              <img src={rightArrow} alt="right arrow" />
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Button;
