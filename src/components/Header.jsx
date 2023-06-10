import { Fragment, useEffect, useRef } from "react";
import heroImg from "/assets/img/mobile/image-hero.jpg";
import heroImgDesktop from "/assets/img/desktop/image-hero.jpg";
import heroImgTab from "/assets/img/tablet/image-hero@2x.jpg";
import Button from "./helpers components/Button.jsx";
import styles from "./Header.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const maskElRef = useRef(null);

  useEffect(() => {
    const maskEl = maskElRef.current;
    const elAnimation = gsap.fromTo(
      maskEl,
      {
        yPercent: 150,
      },
      { yPercent: 0 }
    );

    ScrollTrigger.create({
      // markers: true,
      start: "top 30%",
      trigger: maskEl,
      onEnter: () => elAnimation.play(),
      onEnterBack: () => elAnimation.restart(),
      // onLeave: () => elAnimation.reverse(),
    });
  }, []);

  return (
    <Fragment>
      <header>
        {/* only visible on desktop screen */}
        <div className={styles["black-container"]}>
          <div className={`${styles["mask-element"]}`}>
            <h1 role="desktop h1" className={styles["desktop-h1"]}>
              Modern <span>Art Gallery</span>
            </h1>
          </div>
        </div>

        <div className={styles["img-container"]}>
          <picture>
            <source media="(max-width: 699px)" srcset={heroImg} />
            <source media="(min-width: 699px)" srcset={heroImgTab} />
            <source media="(min-width: 1099px)" srcset={heroImgDesktop} />
            <img src={heroImg} alt="painting image" />
          </picture>
        </div>

        <div className={styles["header-content"]}>
          <div className="mask-element">
            <h1 ref={maskElRef} role="mobile h1">
              Modern <span>Art Gallery</span>
            </h1>
          </div>
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button message="our location" />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
