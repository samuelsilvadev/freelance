import type { Props } from "./types";

import styles from "./hero.module.scss";

export const TRANSLATIONS = {
  IMAGE_ALT: "Author of this website, using a hat, scarf and a long shirt",
};

function Hero(props: Props): JSX.Element {
  return (
    <article className={styles.wrapper}>
      <section className={styles.details}>
        <h1 className={styles.heading}>
          <span className={styles.headingFirstPart}>{props.title}</span>
          <span className={styles.headingSecondPart}>{props.name}</span>
        </h1>
        <p className={styles.subtitle}>{props.details}</p>
        <p className={styles.text}>{props.description}</p>
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
