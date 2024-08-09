import { PiNewspaperDuotone } from "react-icons/pi";
import { MdOutlineFestival, MdOutlineChromeReaderMode } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

import styles from "./entertainment.module.css";

function Entertainment() {
  return (
    <section id="entertainment" className={styles.container}>
      <div className={styles.entertainment_header}>
        <h2>Don't miss out</h2>
        <p>
          Stay informed with real-time news, explore a vast collection of books, and
          discover upcoming events with our comprehensive platform.
        </p>
      </div>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <span>
            <PiNewspaperDuotone className={styles.grid_item__icon} />
          </span>
          <div>
            <h3>News Feed</h3>
            <p className={styles.grid_item__text}>
              Never miss a beat with real-time updates and curated content tailored to
              your interests.
            </p>
            <a href="#">Explore &rarr;</a>
          </div>
        </div>
        <div className={styles.grid_item}>
          <span>
            <MdOutlineFestival className={styles.grid_item__icon} />
          </span>
          <div>
            <h3>Event</h3>
            <p className={styles.grid_item__text}>
              Discover and plan for upcoming concerts, festivals, workshops, and
              conferences.
            </p>
            <a href="#">Explore &rarr;</a>
          </div>
        </div>
        <div className={styles.grid_item}>
          <span>
            <MdOutlineChromeReaderMode className={styles.grid_item__icon} />
          </span>
          <div>
            <h3>Books</h3>
            <p className={styles.grid_item__text}>
              Start your literary journey with us today and discover your next great read.
            </p>
            <a href="#">Explore &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Entertainment;
