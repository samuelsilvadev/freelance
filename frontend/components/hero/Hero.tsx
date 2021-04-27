import styles from "./hero.module.scss";

function Hero(): JSX.Element {
  return (
    <article className={styles.wrapper}>
      <section className={styles.details}>
        <h1 className={styles.heading}>
          <span className={styles.headingFirstPart}>Hello I&apos;m</span>
          <span className={styles.headingSecondPart}>John Smith</span>
        </h1>
        <p className={styles.subtitle}>Professional Freelance Web Designer</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </p>
        <button className={styles.button}>Hire me</button>
      </section>
      <picture className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt="Author of this website, using a hat, scarf and a long shirt"
          src="/hero/hero.png"
        />
      </picture>
    </article>
  );
}

export default Hero;
