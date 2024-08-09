import bells from "../../assets/logo_slider/Bells-University-of-Technology.svg";
import img1 from "../../assets/logo_slider/images1.svg";
import img2 from "../../assets/logo_slider/images2.svg";
import img3 from "../../assets/logo_slider/images3.svg";
import img4 from "../../assets/logo_slider/images4.svg";
import img5 from "../../assets/logo_slider/images5.svg";
import img6 from "../../assets/logo_slider/images6.svg";
import img7 from "../../assets/logo_slider/images7.svg";
import img8 from "../../assets/logo_slider/images8.svg";

import styles from "./schools.module.css";

function Logo() {
  return (
    <div className={styles.scroller}>
      <img src={bells} alt="bells logo" />
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      <img src={img7} alt="" />
      <img src={img8} alt="" />
    </div>
  );
}

export default Logo;
