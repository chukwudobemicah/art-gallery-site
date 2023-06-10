import styles from "./Wrapper.module.scss";

// This is an 93% default width wrapper

const Wrapper = (props) => {
  const classes = `${styles.wrapper} ${styles[`${props.className}`]}`;
  return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
