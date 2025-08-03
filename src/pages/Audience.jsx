import React from "react";
import styles from "../styles/AudiSection.module.css";

import audi_img from "../assets/images/audi_img.png";
import vector from "../assets/icons/vector.png";
import tourism from "../assets/icons/tourism.png";
import localBusiness from "../assets/icons/localBusiness.png";
import tourist from "../assets/icons/tourist.png";
import cultureReligions from "../assets/icons/cultureReligions.png";


const Audience = () => {
  return (
    <>
      {/* <div className="audi-cover">
        <div className="audiVector">
          <img src={vector} alt="vector" />{" "}
        </div>

        <div className="audi-container">
          <h5>App Overview</h5>
          <h4>
            What's Inside <span>The App?</span>
          </h4>

          <div className="audi-wrapper">
            
            <div className="audi-img-container">
                <div className="corner-deco top-left"></div>
  <div className="corner-deco bottom-right"></div>
              <img src={audi_img} alt="audi_img" />
              <div className="audi-img-heading">Schedule Your Demo Today</div>
            </div>

            <div className="audi-card-container">
              <div className="audi-card">
                <div className="audi-card-icon">A</div>
                <div className="audi-card-heading">
                  Tourism Boards & City Officials
                </div>
                <div className="audi-card-para">
                  Promote attractions, track <br /> visitor insights, support
                  local <br />
                  economy.
                </div>
              </div>

              <div className="audi-card">
                <div className="audi-card-icon">A</div>

                <div className="audi-card-heading">Local Businesses</div>
                <div className="audi-card-para">
                  Get listed, offer deals, and <br /> increase walk-ins through
                  app <br />
                  engagement.
                </div>
              </div>

              <div className="audi-card">
                <div className="audi-card-icon">A</div>

                <div className="audi-card-heading"> Tourists & Locals</div>
                <div className="audi-card-para">
                  Experience the city <br /> interactively, join events, and{" "}
                  <br /> earn rewards.
                </div>
              </div>

              <div className="audi-card">
                <div className="audi-card-icon">A</div>

                <div className="audi-card-heading">Cultural Regions</div>
                <div className="audi-card-para">
                  Preserve and promote your <br /> history, myths, and
                  traditions <br />
                  through digital storytelling.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

       <div className={styles.audiCover}>
      <div className={styles.audiVector}>
        <img src={vector} alt="vector" />
      </div>

      <div className={styles.audiContainer}>
        <h5>App Overview</h5>
        <h4>
          What's Inside <span>The App?</span>
        </h4>

        <div className={styles.audiWrapper}>
          <div className={styles.audiImgContainer}>
            <div className={`${styles.cornerDeco} ${styles.topLeft}`}></div>
            <div className={`${styles.cornerDeco} ${styles.bottomRight}`}></div>
            <img src={audi_img} alt="audi_img" />
            <div className={styles.audiImgHeading}>Schedule Your Demo Today</div>
          </div>

          <div className={styles.audiCardContainer}>
            <div className={styles.audiCard}>
              <div className={styles.audiCardIcon}><img src={tourism} alt="tourism" /> </div>
              <div className={styles.audiCardHeading}>
                Tourism Boards & City Officials
              </div>
              <div className={styles.audiCardPara}>
                Promote attractions, track visitor insights, support local economy.
              </div>
            </div>

            <div className={styles.audiCard}>
              <div className={styles.audiCardIcon}><img src={localBusiness} alt="localBusiness" /> </div>
              <div className={styles.audiCardHeading}>Local Businesses</div>
              <div className={styles.audiCardPara}>
                Get listed, offer deals, and increase walk-ins through app engagement.
              </div>
            </div>

            <div className={styles.audiCard}>
              <div className={styles.audiCardIcon}><img src={tourist} alt="tourist" /> </div>
              <div className={styles.audiCardHeading}>Tourists & Locals</div>
              <div className={styles.audiCardPara}>
                Experience the city interactively, join events, and earn rewards.
              </div>
            </div>

            <div className={styles.audiCard}>
              <div className={styles.audiCardIcon}><img src={cultureReligions} alt="cultureReligions" /> </div>
              <div className={styles.audiCardHeading}>Cultural Regions</div>
              <div className={styles.audiCardPara}>
                Preserve and promote your history, myths, and traditions through
                digital storytelling.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Audience;
