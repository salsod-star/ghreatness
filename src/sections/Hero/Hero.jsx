import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";

import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_content}>
        <div className={styles.pill_container}>
          <a href="#" className={styles.pill}>
            <span className={styles.small_bg_gradient}>Ghreatness</span>
            Step into a world full of ghreatness
            <FaPersonWalkingDashedLineArrowRight className={styles.person_svg} />
          </a>
        </div>
        <h1 className={styles.hero_title}>
          Revolutionizing the <span>student experience</span>
        </h1>
        <p className={styles.hero_text}>
          Join the ultimate networking platform exclusively for students of private
          universities, where connection, entertainment, and gaming collide! Experience a
          vibrant community designed to enhance your academic journey, foster meaningful
          relationships, and provide endless opportunities for fun and growth.
        </p>
        <div className={styles.hero_btn_wrapper}>
          <a href="#" className={`${styles.hero_btn} ${styles.hero_btn_connect}`}>
            Connect with ghreat minds
          </a>
          <a href="#" className={`${styles.hero_btn} ${styles.hero_btn_fun}`}>
            Join the fun
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
