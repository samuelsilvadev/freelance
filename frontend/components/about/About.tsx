import ProgressBar from "components/progress-bar";

import styles from "./about.module.scss";

export const TRANSLATIONS = {
  TITLE: "About",
  SUBTITLE: "Why You Hire Me?",
  CONTENT:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.",
  IMAGE_ALT: "Author making gesture of holding some object",
};

const SKILLS = [
  { label: "UI/UX Design", value: 85 },
  { label: "Web Design", value: 75 },
  { label: "HTML/CSS", value: 90 },
  { label: "Sketch", value: 65 },
];

function About(): JSX.Element {
  const renderSkillItem = (skill: typeof SKILLS[number]) => (
    <li className={styles.skillItem} key={`${skill.label}-${skill.value}`}>
      <ProgressBar label={skill.label} value={skill.value} />
    </li>
  );

  return (
    <article className={styles.wrapper}>
      <picture className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/about/about.png"
          alt={TRANSLATIONS.IMAGE_ALT}
        />
        <div className={styles.frame} />
      </picture>
      <section className={styles.informationWrapper}>
        <h2 className={styles.title}>{TRANSLATIONS.TITLE}</h2>
        <p className={styles.subtitle}>{TRANSLATIONS.SUBTITLE}</p>
        <p className={styles.content}>{TRANSLATIONS.CONTENT}</p>
        <ul className={styles.skillsList}>{SKILLS.map(renderSkillItem)}</ul>
      </section>
    </article>
  );
}

export default About;
