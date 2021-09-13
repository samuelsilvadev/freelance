import PortFolioCarousel from "components/portfolio-carousel";

import styles from "./portfolio.module.scss";

import type { Props } from "./types";

const MOCK_ITEMS = [
  {
    title: "App Landing Page",
    subtitle: "Web Design",
    image: {
      src:
        "https://preview.uideck.com/items/freelancer/assets/images/project-1.jpg",
      alt: "",
    },
  },
  {
    title: "App Landing Page",
    subtitle: "Web Design",
    image: {
      src:
        "https://preview.uideck.com/items/freelancer/assets/images/project-2.jpg",
      alt: "",
    },
  },
  {
    title: "App Landing Page",
    subtitle: "Web Design",
    image: {
      src:
        "https://preview.uideck.com/items/freelancer/assets/images/project-3.jpg",
      alt: "",
    },
  },
  {
    title: "App Landing Page",
    subtitle: "Web Design",
    image: {
      src:
        "https://preview.uideck.com/items/freelancer/assets/images/project-1.jpg",
      alt: "",
    },
  },
  {
    title: "App Landing Page",
    subtitle: "Web Design",
    image: {
      src:
        "https://preview.uideck.com/items/freelancer/assets/images/project-3.jpg",
      alt: "",
    },
  },
];

function Portfolio(props: Props): JSX.Element {
  const { title, subtitle, id } = props;

  return (
    <article id={id} className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <PortFolioCarousel items={MOCK_ITEMS} />
    </article>
  );
}

export default Portfolio;
