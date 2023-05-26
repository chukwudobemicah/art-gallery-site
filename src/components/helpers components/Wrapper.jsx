import styles from "./Wrapper.module.scss";

const Wrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Wrapper;
