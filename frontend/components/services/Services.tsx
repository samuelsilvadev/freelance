import React, { forwardRef } from "react";

import ServicesList from "./ServicesList";

import type { Props } from "./types";

import styles from "./services.module.scss";

function Services(
  props: Props,
  ref: React.ForwardedRef<HTMLElement>
): JSX.Element {
  const { title, subtitle, items, id } = props;

  return (
    <article ref={ref} id={id} className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <ServicesList items={items} />
      </div>
    </article>
  );
}

const ServicesForwardedRef = forwardRef(Services);

export default ServicesForwardedRef;
