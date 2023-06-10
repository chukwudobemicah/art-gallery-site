// import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./LocationSectionOne.module.scss";
import Wrapper from "../../helpers components/wrapper";
gsap.registerPlugin(ScrollTrigger);

const LocationSectionOne = () => {
  {
    /* incase i want back the animation */
  }

  // const maskElRef = useRef(null);
  // useLayoutEffect(() => {
  //   const maskEl = maskElRef.current;

  //   const animation = gsap.fromTo(
  //     maskEl,
  //     {
  //       yPercent: 150,
  //     },
  //     { yPercent: 0 }
  //   );

  //   ScrollTrigger.create({
  //     trigger: maskEl,
  //     start: "top 90%",
  //     onEnter: () => animation.restart(),
  //     // onEnterBack: () => animation.reverse(),
  //     // onLeave: () => animation.reverse(),
  //     // onLeaveBack: () => animation.reverse(),
  //     // markers: true,
  //   });
  // }, []);

  return (
    <section className={styles.locationSectionOne}>
      <Wrapper>
        <div>
          {/* incase i want back the animation */}
          {/* <div className="mask-element">
            <h1 ref={maskElRef}>Our location</h1>
          </div> */}
          <div>
            <h1>Our location</h1>
          </div>

          <div className={styles.content}>
            <h2>99 King Street</h2>
            <ul>
              <li>Newport</li>
              <li>RI 02840</li>
              <li>United States of Americ</li>
            </ul>
            <p>
              Our location 99 King Street Our newly opened gallery is located
              near the Edward King House on 99 King Street, the Modern Art
              Gallery is free to all visitors and open seven days a week from
              8am to 9pm.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default LocationSectionOne;
