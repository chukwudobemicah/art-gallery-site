import styles from "./Footer.module.scss";
import Wrapper from "./helpers components/wrapper";
import facebookImg from "/public/assets/img/icon-facebook.svg";
import twitterImg from "/public/assets/img/icon-twitter.svg";
import instagramImg from "/public/assets/img/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <h3>
          Modern <span>Art Gallery</span>
        </h3>
        <p>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div className={styles["socials-img"]}>
          <img src={facebookImg} alt="facebook img" />
          <img src={instagramImg} alt="instagram img" />
          <img src={twitterImg} alt="twitter img" />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
