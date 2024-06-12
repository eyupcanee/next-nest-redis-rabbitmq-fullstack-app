import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_content}>
          <div className={styles.content}>
            <h4 className={styles.subHeading}>Eyüp Can Esen</h4>
            <h1>
              Do you need anything for your <span>project?</span>
            </h1>
            <h4 className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              minus dolor placeat voluptates. Non ipsam sint dolorum, commodi
              ullam maxime. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Commodi, corrupti.
            </h4>
            <button className={styles.btn}>Create Project</button>
          </div>
        </div>
      </div>
    </>
  );
}
