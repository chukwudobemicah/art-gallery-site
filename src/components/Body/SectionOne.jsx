// import { Fragment } from "react";
// import { createBrowserRouter } from "react-router-dom";
import gridImageOne from "/assets/img/mobile/image-grid-1.jpg";
import gridImageOneDesktop from "/assets/img/desktop/image-grid-1.jpg";
import gridImageOneTab from "/assets/img/tablet/image-grid-1.jpg";
import styles from "./SectionOne.module.scss";
import Wrapper from "../helpers components/wrapper";

const SectionOne = () => {
  return (
    <Wrapper>
      <section className={styles["section-1"]}>
        <div className={styles["img-container"]}>
          <picture>
            <source media="(max-width: 700px)" srcset={gridImageOne} />
            <source media="(min-width: 700px)" srcset={gridImageOneTab} />
            <source media="(min-width: 1100px)" srcset={gridImageOneDesktop} />
            <img src={gridImageOne} alt="grid img one" />
          </picture>
        </div>
        <div>
          <div className={styles["mask-element"]}>
            <h2>Your day at the gallery</h2>
          </div>
          <p>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default SectionOne;
