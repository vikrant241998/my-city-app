import React from "react";
import styles from "../styles/WhyChoose.module.css";

import interactiveExploration from "../assets/icons/interactiveExploration.png";
import cultural from "../assets/icons/cultural.png";
import businessEngagement from "../assets/icons/businessEngagement.png";
import eventCalendar from "../assets/icons/eventCalendar.png";
import Gamification from "../assets/icons/Gamification.png";
import multiSupport from "../assets/icons/multiSupport.png";
import Offline from "../assets/icons/Offline.png";

const cardData = [
  {
    icon: interactiveExploration,
    title: "Interactive Exploration",
    desc: "Discover points of interest, nature trails, museums, and hidden gems via map.",
  },
  {
    icon: cultural,
    title: "Cultural Storytelling",
    desc: "Integrate your city’s history and legends (e.g., Sleeping Beauty).",
  },
  {
    icon: businessEngagement,
    title: "Business Engagement",
    desc: "Local businesses can promote offers and boost visibility.",
  },
  {
    icon: eventCalendar,
    title: "Event Calendar",
    desc: "Promote public events and allow RSVPs.",
  },
  {
    icon: Gamification,
    title: "Gamification",
    desc: "Points, check-ins, quizzes, and photo challenges.",
  },
  {
    icon: multiSupport,
    title: " Multilingual Support",
    desc: "Ideal for tourists and locals alike (DE/EN).",
  },
  {
    icon: Offline,
    title: "Offline Functionality",
    desc: "Designed for reliable use on the go.",
  },
];

const WhyChoose = () => {
  return (
    <>
    <div className={styles["why-choose-container"]}>
      <h5>Why Choose</h5>
      <h4>
        Welcome To <span>My City App</span>
      </h4>

      <div className={styles["why-choose-wrapper"]}>
        {cardData.map((card, index) => (
          <div key={index} className={styles["why-choose-card"]}>
            <div className={styles["choose-card-icon"]}>
              <img src={card.icon} alt={card.title} />
            </div>
            <div className={styles["choose-card-heading"]}>{card.title}</div>
            <div className={styles["choose-card-para"]}>{card.desc}</div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default WhyChoose;
