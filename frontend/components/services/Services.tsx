import ServicesList from "./ServicesList";

import type { Props } from "./types";

import styles from "./services.module.scss";

function Services(props: Props): JSX.Element {
  return (
    <article className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>{props.title}</h2>
        <h3 className={styles.subtitle}>{props.subtitle}</h3>
        <ServicesList items={props.items} />
      </div>
    </article>
  );
}

export default Services;
