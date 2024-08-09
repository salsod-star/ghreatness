import styles from "./Statistics.module.css";

function Statistics() {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.statistics_head}>Join the elite community</h2>
      <div className={styles.grid_container}>
        <div>
          <h3 className={styles.heading}>16+</h3>
          <span>Private Universities</span>
        </div>
        <div>
          <h3 className={styles.heading}>504+</h3>
          <span>Notes</span>
        </div>
        <div>
          <h3 className={styles.heading}>50+</h3>
          <span>Career Opportunities</span>
        </div>
        <div>
          <h3 className={styles.heading}>500+</h3>
          <span>Registered Students</span>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
