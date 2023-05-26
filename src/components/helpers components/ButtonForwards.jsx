import { Fragment } from "react";
import styles from "./ButtonForwards.module.scss";
import rightArrow from "/assets/img/icon-arrow-left.svg";
import { Link } from "react-router-dom";

const ButtonForwards = (props) => {
  return (
    <Fragment>
      <div className={styles["button-container"]}>
        <Link to={"location"}>
          {/* <a href=""> */}
          <div>
            <button>{props.message}</button>
            <div className={styles["right-arrow-container"]}>
              <img src={rightArrow} alt="right arrow" />
            </div>
          </div>
          {/* </a> */}
        </Link>
      </div>
    </Fragment>
  );
};

export default ButtonForwards;
