import type { PropsServiceItem } from "./types";

import styles from "./serviceItem.module.scss";

function ServiceItem(props: PropsServiceItem): JSX.Element | null {
  const { title, description, icon } = props;

  if (!title || !description) {
    return null;
  }

  return (
    <article className={styles.wrapper}>
      {icon && (
        <picture className={styles.imageWrapper}>
          <img
            src={icon.url}
            alt={icon.alternativeText}
            loading="lazy"
            width="52"
            height="52"
          />
        </picture>
      )}
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default ServiceItem;
