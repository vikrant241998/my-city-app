import React from "react";
import styles from "../styles/Contact.module.css";

import cityImg from "../assets/images/cityImg.png";
import cityPersonImg from "../assets/images/cityPersonImg.png";
import vectorIcon from "../assets/icons/vectorIcon.png";
import message from "../assets/icons/message.png";
import whatsApp from "../assets/icons/whatsApp.png";

const Contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactImgContainer}>
          <img src={cityImg} alt="city" />
          <div className={styles.contactVector}>
            <img src={vectorIcon} alt="vectorIcon" />
          </div>
        </div>

        <div className={styles.contactCityContainer}>
          <h2>
            Ready to Make Your <br /> City Interactive ?
          </h2>

          <div className={styles.contactCityWrapper}>
            <div className={styles.contactCityLeft}>
              <div className={styles.contactCityPara}>
                <span>&#10003;</span> <p>Launch in 6-8 Weeks</p>
              </div>
              <div className={styles.contactCityPara}>
                <span>&#10003;</span> <p>Built with German precision</p>
              </div>
              <div className={styles.contactCityPara}>
                <span>&#10003;</span> <p>Loved by locals & tourists alike</p>
              </div>

              <br />

              <div className={styles.contactCityIcon}>
                <img src={message} alt="message" />
                <p>hello@maverickmount.com</p>
              </div>
              <div className={styles.contactCityIcon}>
                <img src={whatsApp} alt="whatsApp" />
                <p>+1 419 405 7399</p>
              </div>

              <button className={styles.contactButton}>
                Schedule Your Demo Today
              </button>
            </div>

            <div className={styles.contactCityRight}>
              <img src={cityPersonImg} alt="person" />
              <div
                className={`${styles.cornerBox} ${styles.bottomRight}`}
              ></div>
              <div
                className={`${styles.cornerBoxTop} ${styles.topRight}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
