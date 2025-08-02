import React from "react";
import interactiveExploration from "../assets/icons/interactiveExploration.png";
import cultural from "../assets/icons/cultural.png";
import businessEngagement from "../assets/icons/businessEngagement.png";
import eventCalendar from "../assets/icons/eventCalendar.png";
import Gamification from "../assets/icons/Gamification.png";
import multiSupport from "../assets/icons/multiSupport.png";
import Offline from "../assets/icons/Offline.png";

const WhyChoose = () => {
  return (
    <>
      <div className="why-choose-container">
        <h5>Why Choose</h5>
        <h4>
          Welcome To  <span>My City App</span>
        </h4>

        <div className="why-choose-wrapper">
          <div className="why-choose-card">
            <div className="choose-card-icon"> <img src={interactiveExploration} alt="interactiveExploration" /></div>
            <div className="choose-card-heading"> Interactive Exploration</div>
            <div className="choose-card-para">Discover points of interest, nature trails, museums, and hidden gems via map.</div>
          </div>

          <div className="why-choose-card">
            <div className="choose-card-icon"><img src={cultural} alt="Cultural" /> </div>
            <div className="choose-card-heading"> Cultural Storytelling</div>
            <div className="choose-card-para">Integrate your city’s history and legends (e.g., Sleeping Beauty).</div>
          </div>

          <div className="why-choose-card">
            <div className="choose-card-icon"> <img src={businessEngagement} alt="businessEngagement" /></div>
            <div className="choose-card-heading">Business Engagement</div>
            <div className="choose-card-para">Local businesses can promote offers and boost visibility.</div>
          </div>

          <div className="why-choose-card">
            <div className="choose-card-icon"> <img src={eventCalendar} alt="eventCalendar" /></div>
            <div className="choose-card-heading">Event Calendar</div>
            <div className="choose-card-para">Promote public events and allow RSVPs.</div>
          </div>

          <div className="why-choose-card">
            <div className="choose-card-icon"><img src={Gamification} alt="Gamification" /> </div>
            <div className="choose-card-heading">Gamification</div>
            <div className="choose-card-para">Points, check-ins, quizzes, and photo challenges.</div>
          </div>

          <div className="why-choose-card">
            <div className="choose-card-icon"> <img src={multiSupport} alt="multiSupport" /></div>
            <div className="choose-card-heading"> Multilingual Support</div>
            <div className="choose-card-para">Ideal for tourists and locals alike (DE/EN).</div>
          </div>

          <div className="why-choose-card">
            <div className="choose-card-icon"><img src={Offline} alt="Offline" /></div>
            <div className="choose-card-heading">Offline Functionality</div>
            <div className="choose-card-para">Designed for reliable use on the go.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
