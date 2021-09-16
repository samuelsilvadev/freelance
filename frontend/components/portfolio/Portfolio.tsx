import PortFolioCarousel from "components/portfolio-carousel";
import type {
  Item,
  Item as PortFolioCarouselItem,
} from "components/portfolio-carousel/types";

import styles from "./portfolio.module.scss";

import type { Props, PortfolioItem } from "./types";

function normalizeItemsForCarousel(
  items: PortfolioItem[]
): PortFolioCarouselItem[] {
  return items
    .map(({ title, description, media }) => {
      if (!title || !description || !media?.[0]) {
        return null;
      }

      return {
        title,
        subtitle: description,
        image: {
          alt: media[0].alternativeText,
          src: media[0].url,
        },
      };
    })
    .filter((item): item is Item => !!item);
}

function Portfolio(props: Props): JSX.Element | null {
  const { title, subtitle, id, items } = props;

  if (items.length === 0) {
    return null;
  }

  return (
    <article id={id} className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <PortFolioCarousel items={normalizeItemsForCarousel(items)} />
    </article>
  );
}

export default Portfolio;
