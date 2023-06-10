// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
import styles from "./Footer.module.scss";
import Wrapper from "./helpers components/wrapper.jsx";
import facebookImg from "/public/assets/img/icon-facebook.svg";
import twitterImg from "/public/assets/img/icon-twitter.svg";
import instagramImg from "/public/assets/img/icon-instagram.svg";

const Footer = (props) => {
  // const maskElRef = useRef(null);

  // useEffect(() => {
  //   const maskEl = maskElRef.current;
  //   const elAnimation = gsap.fromTo(
  //     maskEl,
  //     {
  //       yPercent: -100,
  //     },
  //     { yPercent: 0 }
  //   );

  //   ScrollTrigger.create({
  //     markers: true,
  //     // start: "top 30%",
  //     trigger: maskEl,
  //     onEnter: () => elAnimation.restart(),
  //     onEnterBack: () => elAnimation.restart(),
  //     // onLeave: () => elAnimation.reverse(),
  //   });
  // }, []);

  const classes = props.className && `${styles[`${props.className}`]}`;
  return (
    <footer className={classes}>
      <Wrapper>
        <div className={"mask-element"}>
          <h3>
            Modern <span>Art Gallery</span>
          </h3>
        </div>
        <p>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div className={styles["socials-img"]}>
          <a href="https://twitter.com/ChukwudobeMicah?t=AERqAVcb1oss7oW2H_pptQ&s=09">
            <img src={facebookImg} alt="facebook img" />
          </a>
          <a href="https://twitter.com/ChukwudobeMicah?t=AERqAVcb1oss7oW2H_pptQ&s=09">
            <img src={instagramImg} alt="instagram img" />
          </a>
          <a href="https://twitter.com/ChukwudobeMicah?t=AERqAVcb1oss7oW2H_pptQ&s=09">
            <img src={twitterImg} alt="twitter img" />
          </a>

          {/* <img src={instagramImg} alt="instagram img" />
          <img src={twitterImg} alt="twitter img" /> */}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
