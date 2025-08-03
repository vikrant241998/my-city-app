import React from "react";
import styles from '../styles/Home.module.css';

import homeImg from "../assets/images/homeImg.png";
import myCityAppImg from "../assets/images/myCityAppImg.png";
import homePlace from "../assets/images/homePlace.png";
import SleepingImg from "../assets/images/SleepingImg.png";
import vector from "../assets/icons/vector.png";

import Header from "../components/Header";
import WhyChoose from "../pages/WhyChoose";
import Overview from "../pages/Overview";
import Pricing from "./Pricing";
import Audience from "./Audience";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    


<div className={styles.homeBannerContainer}>
  <svg
    className={styles.heroCurve}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,140 C360,260 1200,450 1440,150 L1440,318 L0,320 Z"
    />
  </svg>

  <div className={styles.homeBannerWrapper}>
    <div className={styles.homeBannerLeft}>
      <div className={styles.homeBannerName}>MY CITY APP</div>
      <div className={styles.homeBannerHeading}>
        Discover, Experience, <br className={styles.homeTextBr} /> Engage
      </div>

      <p className={styles.homeBannerPara}>
        Digitize your town's tourism and culture with an interactive
        <br className={styles.homeTextBr} />
        mobile platform.
        <br className={styles.homeTextBr} />
        <br className={styles.homeTextBr} />
        <br className={styles.homeTextBr} />
        From storytelling and events to local business promotions
        <br className={styles.homeTextBr} /> — all in one app.
      </p>

      <div className={styles.homeBannerButtonContainer}>
        <button className={styles.homeBookBtn}>Book a Free Demo</button>
        <button className={styles.homeContactBtn}>Contact Maverick Mount</button>
      </div>
    </div>

    <div className={styles.homeBannerRight}>
      <img src={homeImg} alt="homeImg" />
      <div className={styles.homeMyCityAppImg}>
        <img src={myCityAppImg} alt="myCityAppImg" />
      </div>
      <div className={styles.homePlaceAppImg}>
        <img src={homePlace} alt="homePlace" />
      </div>
      <div className={styles.homeSleepingAppImg}>
        <img src={SleepingImg} alt="SleepingImg" />
      </div>
    </div>
  </div>

  <div className={styles.homeVectorImg}>
    <img src={vector} alt="vector" />
  </div>
</div>


      <Overview />
      <Audience />
      <WhyChoose />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
