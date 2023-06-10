import Wrapper from "../helpers components/wrapper.jsx";
import gridOneImg from "/assets/img/mobile/image-grid-2.jpg";
import gridOneImgDesktop from "/assets/img/desktop/image-grid-2.jpg";
import gridOneImgTab from "/assets/img/tablet/image-grid-2.jpg";
import gridTwoImg from "/assets/img/mobile/image-grid-3.jpg";
import gridTwoImgDesktop from "/assets/img/desktop/image-grid-3.jpg";
import gridTwoImgTab from "/assets/img/tablet/image-grid-3.jpg";
import styles from "./SectionTwo.module.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
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
      end: "bottom -10%",
      onEnter: () => animation.restart(),
      onEnterBack: () => animation.reverse(),
      onLeave: () => animation.reverse(),
      // onLeaveBack: () => animation.reverse(),
      // markers: true,
    });
  }, []);

  return (
    <Wrapper>
      <section className={styles["section-2"]}>
        <div className={styles["img-container"]}>
          <picture>
            <source
              media="(max-width: 700px)"
              srcset={gridOneImg}
              alt="bench img"
            />
            <source
              media="(min-width: 700px)"
              srcset={gridOneImgTab}
              alt="bench img"
            />
            <source
              media="(min-width: 1100px)"
              srcset={gridOneImg}
              alt="bench img"
            />
            <img src={gridOneImgDesktop} alt="bench img" />
          </picture>
        </div>

        <div className={styles["img-container"]}>
          <picture>
            <source
              media="(max-width: 700px)"
              srcset={gridTwoImg}
              alt="hall img"
            />
            <source
              media="(min-width: 700px)"
              srcset={gridTwoImgTab}
              alt="hall img"
            />
            <source
              media="(min-width: 1100px)"
              srcset={gridTwoImgDesktop}
              alt="hall img"
            />
            <img src={gridTwoImg} alt="hall img" />
          </picture>
        </div>

        <div className={styles.content}>
          <div>
            <div className="mask-element">
              <h2 ref={maskElRef}>
                Come & be <span>inspired</span>
              </h2>
            </div>
            <p>
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default SectionTwo;
