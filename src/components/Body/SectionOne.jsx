// import { Fragment } from "react";
// import { createBrowserRouter } from "react-router-dom";
import gridImageOne from "/assets/img/mobile/image-grid-1.jpg";
// import gridImageOneDesktop from "/assets/img/desktop/image-grid-1.jpg";
// public\assets\img\desktop\image-grid-1@2x.jpg
import gridImageOneDesktop from "/assets/img/desktop/image-grid-1@2x.jpg";
import gridImageOneTab from "/assets/img/tablet/image-grid-1.jpg";
import styles from "./SectionOne.module.scss";
import Wrapper from "../helpers components/wrapper.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const SectionOne = () => {
  const maskElRef = useRef(null);
  useLayoutEffect(() => {
    const maskEl = maskElRef.current;

    const animation = gsap.fromTo(
      maskEl,
      {
        yPercent: -150,
      },
      { yPercent: 0 }
    );

    ScrollTrigger.create({
      trigger: maskEl,
      start: "top 85%",
      onEnter: () => animation.restart(),
      onEnterBack: () => animation.restart(),
      onLeave: () => animation.reverse(),
      // markers: true,
    });
  }, []);

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
          <div className={`${styles["mask-element"]} mask-element`}>
            <h2 ref={maskElRef}>Your day at the gallery</h2>
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
