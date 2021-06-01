import ProgressBar from "components/progress-bar";

import type { Props, Skill } from "./types";

import styles from "./about.module.scss";

function About(props: Props): JSX.Element {
  const { title, subtitle, content, alternativeText, skills, id } = props;

  const renderSkillItem = (skill: Skill) =>
    skill.label &&
    skill.value && (
      <li className={styles.skillItem} key={`${skill.label}-${skill.value}`}>
        <ProgressBar label={skill.label} value={Number(skill.value)} />
      </li>
    );

  return (
    <article id={id} className={styles.wrapper}>
      <picture className={styles.imageWrapper}>
        <source type="image/avif" srcSet="/about/about.avif" />
        <source type="image/webp" srcSet="/about/about.webp" />
        <img
          className={styles.image}
          src="/about/about.png"
          alt={alternativeText}
        />
        <div className={styles.frame} />
      </picture>
      <section className={styles.informationWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.content}>{content}</p>
        {skills?.length && (
          <ul className={styles.skillsList}>{skills.map(renderSkillItem)}</ul>
        )}
      </section>
    </article>
  );
}

export default About;
