import React from "react";
import styles from "../styles/Pricing.module.css";
import vectorIcon from "../assets/icons/vectorIcon.png";

const Pricing = () => {
  return (
    <>
      <div className={styles.tireHandler}>
        <div className={styles.tierContainer}>
          <h5> pricing tiers</h5>
          <h4>
            What You <span>Will Get</span>
          </h4>

          <div className={styles.tierWrapper}>
            <div className={styles.floatingBox}>
              <img src={vectorIcon} alt="vectorIcon" />
            </div>

            {/* Starter Card */}
            <div className={styles.tireCard}>
              <div className={styles.tireCardHeading}>Starter</div>
              <div className={styles.tireListContainer}>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>10 POIs</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>10 Local businesses</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Event calendar</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>CMS (basic)</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>
                    Multilingual (DE/EN)
                  </div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Hosting - €49/month</div>
                </div>
              </div>
              <h2 className={styles.tierPrice}> &euro; 1,950</h2>
              <button className={styles.tireButton}>Choose plan</button>
            </div>

            {/* Premium Card */}
            <div className={styles.tireCard}>
              <div className={styles.tireCardHeading}>Premium</div>
              <div className={styles.tireListContainer}>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>50 POIs</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Custom saga trail</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>
                    Gamification & quizzes
                  </div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Push notifications</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Business dashboard</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>(50 shops)</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Analytics</div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Hosting- €89/month</div>
                </div>
              </div>
              <h2 className={styles.tierPrice}> &euro; 4,900</h2>
              <button className={styles.tireButton}>Choose plan</button>
            </div>

            {/* Deluxe Card */}
            <div className={styles.tireCard}>
              <div className={styles.tireCardHeading}>Deluxe</div>
              <div className={styles.tireListContainer}>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>
                    Unlimited POIs & trails
                  </div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>
                    In-app monetization (ads/tickets)
                  </div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>
                    Dual-mode: Citizen/Tourist
                  </div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>
                    Regional CMS API integration
                  </div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>
                    Dedicated Account Manager
                  </div>
                </div>
                <div className={styles.tireList}>
                  <span> &#10003; </span>
                  <div className={styles.tireListPara}>Hosting: €149/month</div>
                </div>
              </div>
              <h2 className={styles.tierPrice}> &euro; 9,800</h2>
              <button className={styles.tireButton}>Choose plan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
