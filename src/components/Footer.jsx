import React from "react";
import styles from "../styles/Footer.module.css";

import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import nekIcon from "../assets/icons/nekIcon.svg";
import plusIcon from "../assets/icons/plusIcon.png";
import mountIcon from "../assets/icons/mountIcon.png";

const Footer = () => {
  return (
    <>       
      <div className={styles.footerContainer}>
      <div className={styles.footerMenuContainer}>
        <div className={styles.footerMenu}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">App overview</a></li>
            <li><a href="#">Audience</a></li>
            <li><a href="#">Why Choose</a></li>
            <li><a href="#">Pricing Tiers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.footerSocialIcon}>
          <div className={styles.footerIcon}><a href="#"><img src={facebook} alt="facebook" /></a></div>
          <div className={styles.footerIcon}><a href="#"><img src={linkedin} alt="linkedin" /></a></div>
          <div className={styles.footerIcon}><a href="#"><img src={instagram} alt="instagram" /></a></div>
        </div>
      </div>

      <div className={styles.footerTechnoContainer}>
        <div className={styles.footerLeftContainer}>
          <div className={styles.footerLeftImg}><img src={mountIcon} alt="mountIcon" /></div>
          <h1>New Delhi, India</h1>
        </div>
        <div className={styles.footerMidContainer}><img src={plusIcon} alt="plusIcon" /></div>
        <div className={styles.footerLeftContainer}>
          <div className={styles.footerLeftImg}><img src={nekIcon} alt="nekIcon" /></div>
        </div>
      </div>

      <div className={styles.footerLine}></div>

      <div className={styles.footerBottomContainer}>
        <p>@2025 Maverick Mount Technologies All Rights Reserved.</p>
        <p>Privacy Policy | Terms Of Service</p>
      </div>
    </div>
       </>
  );
};

export default Footer;
