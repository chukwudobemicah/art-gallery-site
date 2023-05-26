import { Fragment } from "react";
import heroImg from "/assets/img/mobile/image-hero.jpg";
import heroImgDesktop from "/assets/img/desktop/image-hero.jpg";
import heroImgTab from "/assets/img/tablet/image-hero.jpg";
import ButtonForwards from "./helpers components/ButtonForwards";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div>
          <div className="mask-element">
            <h1 role="desktop h1" className={styles["desktop-h1"]}>
              Modern <span>Art Gallery</span>
            </h1>
          </div>
        </div>
        <div className={styles["img-container"]}>
          <picture>
            <source media="(max-width: 700px)" srcset={heroImg} />
            <source media="(min-width: 700px)" srcset={heroImgTab} />
            <source media="(min-width: 1100px)" srcset={heroImgDesktop} />
            <img src={heroImg} alt="painting image" />
          </picture>
        </div>
        <div className={styles["header-content"]}>
          <div className="mask-element">
            <h1 role="mobile h1">
              Modern <span>Art Gallery</span>
            </h1>
          </div>
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out. Our location
          </p>
          <ButtonForwards message="our location" />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
