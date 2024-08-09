import { useState } from "react";
import articles from "./data";
import styles from "./education.module.css";

function Education() {
  const [category, setCategory] = useState("past questions");

  const handleCategory = (e) => {
    setCategory(e.target.textContent.toLowerCase());
  };

  const filteredArticle = articles.slice().filter((data) => data.category === category);

  const gridItem = filteredArticle.map((data) => (
    <div key={data.id} className={styles.grid_item}>
      <div className={styles.grid_item_header}>
        <img src={data.image} alt="" />
        <span className={styles.grid_item_price}>
          {data.price == 0 ? "$Free" : `$${data.price}`}
        </span>
        <span className={styles.grid_item_category}>{data.category}</span>
      </div>
      <div className={styles.grid_item_content}>
        <h3>{data.title}</h3>
        <p className={styles.grid_item_text}>{data.description}</p>
        <div className={styles.grid_item_cta_box}>
          <a href={data.link}>Get Started</a>
          <a href={data.link}>@Ghreatness</a>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="education" className={styles.container}>
      <article className={styles.education}>
        <header className={styles.education_header}>
          <div className={styles.education_title_box}>
            {/* <span className={styles.education_small_title}>career</span> */}
            <h2 className={styles.education_title}>AcadeMIX</h2>
            <p className={styles.education_text}>
              A step towards change begins with a click of a button. Select a category of
              your choice and chart your way to greatness
            </p>
          </div>
          <div className={styles.education_category_box}>
            <div className={styles.education_category_box1}>
              <span onClick={handleCategory}>Past Questions</span>
              <span onClick={handleCategory}>School Notes</span>
            </div>
            <div className={styles.education_category_box2}>
              <span onClick={handleCategory}>Career Development</span>
              <span onClick={handleCategory}>Learning Tools</span>
            </div>
          </div>
        </header>
        <div
          className={
            filteredArticle.length <= 2
              ? styles.grid_container__smallWidth
              : styles.grid_container
          }
        >
          {gridItem}
        </div>
      </article>
    </section>
  );
}

export default Education;
