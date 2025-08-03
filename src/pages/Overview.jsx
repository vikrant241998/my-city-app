import React from "react";
import styles from "../styles/OverviewSection.module.css";

import city from "../assets/icons/city.png";
import themed from "../assets/icons/themed.png";
import business from "../assets/icons/business.png";
import event from "../assets/icons/event.png";
import interactive from "../assets/icons/interactive.png";
import rewards from "../assets/icons/rewards.png";
import mobile from "../assets/icons/mobile.png";
import admin from "../assets/icons/admin.png";
import vectorIcon from "../assets/icons/vectorIcon.png";

const Overview = () => {
  return (
    <>
      <div className={styles.overviewContainer}>
        <h5>App Overview</h5>
        <h4>
          What's Inside <span>The App?</span>
        </h4>
        <div className={styles.overviewWrapper}>
          <div className={styles.cornerBadge}>
            <img src={vectorIcon} alt="vectorIcon" />
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={city} alt="City-icon" />
            </div>
            <div className={styles.appCardHeading}>City Map</div>
            <div className={styles.appCardPara}>
              When Filters (Eat, Shop, Explore, Relax)
            </div>
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={themed} alt="Themed-icon" />
            </div>
            <div className={styles.appCardHeading}>Themed Trail</div>
            <div className={styles.appCardPara}>
              (like saga or heritage paths)
            </div>
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={business} alt="Business-icon" />
            </div>
            <div className={styles.appCardHeading}>Business Listings</div>
            <div className={styles.appCardPara}>with real-time offers</div>
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={event} alt="Event-icon" />
            </div>
            <div className={styles.appCardHeading}>Event Calendar</div>
            <div className={styles.appCardPara}>with reminders</div>
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={interactive} alt="Interactive-icon" />
            </div>
            <div className={styles.appCardHeading}>Interactive</div>
            <div className={styles.appCardPara}>Quizzes & Challenges</div>
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={rewards} alt="Rewards-icon" />
            </div>
            <div className={styles.appCardHeading}>Rewards System</div>
            <div className={styles.appCardPara}>Earn & redeem city points</div>
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={mobile} alt="Mobile-icon" />
            </div>
            <div className={styles.appCardHeading}>Mobile Dashboard</div>
            <div className={styles.appCardPara}>for businesses</div>
          </div>

          <div className={styles.appContainer}>
            <div className={styles.cardBadge}>
              <img src={admin} alt="Admin-icon" />
            </div>
            <div className={styles.appCardHeading}>Admin CMS</div>
            <div className={styles.appCardPara}>for city teams</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
