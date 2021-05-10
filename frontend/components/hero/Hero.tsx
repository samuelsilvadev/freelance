import styles from "./hero.module.scss";

export const TRANSLATIONS = {
  TITLE_PART_1: "Hello I'm",
  SUBTITLE: "Professional Freelance Web Designer",
  TEXT:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  IMAGE_ALT: "Author of this website, using a hat, scarf and a long shirt",
};

function Hero(): JSX.Element {
  return (
    <article className={styles.wrapper}>
      <section className={styles.details}>
        <h1 className={styles.heading}>
          <span className={styles.headingFirstPart}>
            {TRANSLATIONS.TITLE_PART_1}
          </span>
          <span className={styles.headingSecondPart}>John Smith</span>
        </h1>
        <p className={styles.subtitle}>{TRANSLATIONS.SUBTITLE}</p>
        <p className={styles.text}>{TRANSLATIONS.TEXT}</p>
        <button className={styles.button}>Hire me</button>
      </section>
      <picture className={styles.imageWrapper}>
        <source type="image/avif" srcSet="/hero/hero.avif" />
        <source type="image/webp" srcSet="/hero/hero.webp" />
        <img
          className={styles.image}
          alt={TRANSLATIONS.IMAGE_ALT}
          src="/hero/hero.png"
        />
      </picture>
    </article>
  );
}

export default Hero;
