import Logo from "./Logo";
import styles from "./schools.module.css";

function Schools() {
  return (
    <section className={`${styles.schools_container}`}>
      <div className={styles.scroller_container}>
        <Logo />
        <Logo />
      </div>
      <p>Meet our communities &rarr;</p>
    </section>
  );
}

export default Schools;
