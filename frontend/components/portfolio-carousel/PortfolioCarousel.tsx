import ChevronLeft from "components/icons/chevron-left";
import { useEffect, useRef } from "react";

import styles from "./portfolio-carousel.module.scss";

import type { Props } from "./types";

const getVisibility = function (target: HTMLElement, container: HTMLElement) {
  const elementLeft = target.offsetLeft;
  const elementFinalLeft = elementLeft + target.clientWidth;

  const scrolledContainerLeft = container.scrollLeft;
  const containerFinalLeft = scrolledContainerLeft + container.clientWidth;

  const isElementFullyVisible =
    elementLeft >= scrolledContainerLeft &&
    elementFinalLeft <= containerFinalLeft;

  const isRightPartOfElementVisible =
    elementLeft < scrolledContainerLeft &&
    scrolledContainerLeft < elementFinalLeft;

  const isLeftPartOfElementVisible =
    elementLeft < containerFinalLeft && containerFinalLeft < elementFinalLeft;

  return {
    full: isElementFullyVisible,
    partial: isRightPartOfElementVisible || isLeftPartOfElementVisible,
    isVisible:
      isElementFullyVisible ||
      isRightPartOfElementVisible ||
      isLeftPartOfElementVisible,
  };
};

function PortfolioCarousel(props: Props): JSX.Element | null {
  const { items = [] } = props;

  const listRef = useRef<HTMLUListElement>(null);
  const children = useRef<Element[] | null>(null);

  useEffect(() => {
    if (listRef.current) {
      children.current = Array.from(listRef.current.children);
    }
  }, []);

  const handleOnLeftClick = () => {
    if (children.current) {
      let firstVisibleElementIndex = null;
      let isFullyVisible = null;

      for (let index = 0; index < children.current.length; index++) {
        const { isVisible, full } = getVisibility(
          children.current[index] as HTMLElement,
          listRef.current as HTMLElement
        );

        if (isVisible) {
          firstVisibleElementIndex = index;
          isFullyVisible = full;

          break;
        }
      }

      if (firstVisibleElementIndex) {
        const previousElement = children.current[firstVisibleElementIndex - 1];
        const currentElement = children.current[firstVisibleElementIndex];
        const elementToScroll = isFullyVisible
          ? previousElement
          : currentElement;

        elementToScroll?.scrollIntoView();
      }
    }
  };

  const handleOnRightClick = () => {
    if (children.current) {
      let lastVisibleElementIndex = null;
      let isFullyVisible = null;

      for (let index = 0; index < children.current.length; index++) {
        const { isVisible, full } = getVisibility(
          children.current[index] as HTMLElement,
          listRef.current as HTMLElement
        );

        if (isVisible) {
          lastVisibleElementIndex = index;
          isFullyVisible = full;
        }
      }

      if (lastVisibleElementIndex) {
        const nextElement = children.current[lastVisibleElementIndex + 1];
        const currentElement = children.current[lastVisibleElementIndex];
        const elementToScroll = isFullyVisible ? nextElement : currentElement;

        elementToScroll?.scrollIntoView();
      }
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <ul ref={listRef} className={styles.list}>
        {items.map(({ title, subtitle, image }, index) => {
          return (
            <li className={styles.listItem} key={index}>
              <img
                className={styles.workImage}
                src={image.src}
                alt={image.alt}
              />
              <p className={styles.workTitle}>{title}</p>
              <p className={styles.workSubtitle}>{subtitle}</p>
            </li>
          );
        })}
      </ul>
      <button
        className={styles.chevron}
        aria-label="Navigate to the left"
        onClick={handleOnLeftClick}
      >
        <ChevronLeft />
      </button>
      <button
        className={styles.chevron}
        aria-label="Navigate to the right"
        onClick={handleOnRightClick}
      >
        <ChevronLeft className={styles.rotatedChevron} />
      </button>
    </div>
  );
}

export default PortfolioCarousel;
