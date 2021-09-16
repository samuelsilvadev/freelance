import ServiceItem from "./ServiceItem";

import type { PropsServicesList, Service } from "./types";

import styles from "./servicesList.module.scss";

function ServicesList(props: PropsServicesList): JSX.Element | null {
  const { items } = props;

  if (!items) {
    return null;
  }

  const renderServiceItem = (itemData: Service) => {
    const { title, description, media, id } = itemData;

    return title && description ? (
      <li className={styles.item} key={id}>
        <ServiceItem
          title={title}
          description={description}
          icon={media?.[0]}
        />
      </li>
    ) : null;
  };

  return <ul className={styles.wrapper}>{items.map(renderServiceItem)}</ul>;
}

export default ServicesList;
