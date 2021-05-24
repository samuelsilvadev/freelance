import type { PropsServiceItem } from "./types";

import styles from "./serviceItem.module.scss";

function ServiceItem(props: PropsServiceItem): JSX.Element | null {
  const { title, description } = props;

  if (!title || !description) {
    return null;
  }

  return (
    <article className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default ServiceItem;
