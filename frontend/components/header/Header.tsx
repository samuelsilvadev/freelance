import { useEffect, useRef, useState } from "react";

import Navigation from "components/navigation";
import Logo from "components/icons/logo";
import { useEscape } from "hooks/useEscape";

import styles from "./header.module.scss";

export const TRANSLATIONS = {
  OPEN_NAVIGATION: "Open navigation",
  CLOSE_NAVIGATION: "Close navigation",
};

function Header(): JSX.Element {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isGteMedium, setIsGteMedium] = useState(false);

  const handleToggle = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const handleClose = useRef(() => {
    setIsNavigationOpen(false);
  });

  useEscape(handleClose.current);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 1024px)");

    const handleChange = (
      internalMediaQueryList: MediaQueryList | MediaQueryListEvent
    ) => {
      const isViewportMatchesMediumMediaQuery = internalMediaQueryList.matches;

      setIsGteMedium(isViewportMatchesMediumMediaQuery);

      if (!isViewportMatchesMediumMediaQuery) {
        setIsNavigationOpen(false);
      }
    };

    handleChange(mediaQueryList);

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header className={styles.wrapper}>
      <Logo aria-label="Freelancer" />
      {!isGteMedium && (
        <button
          className={styles.toggle}
          aria-controls="navigation"
          aria-label={
            isNavigationOpen
              ? TRANSLATIONS.CLOSE_NAVIGATION
              : TRANSLATIONS.OPEN_NAVIGATION
          }
          onClick={handleToggle}
        >
          <span
            className={`${styles.dash} ${
              isNavigationOpen ? styles.opened : ""
            }`}
          />
        </button>
      )}
      <Navigation isOpen={isNavigationOpen || isGteMedium} />
    </header>
  );
}

export default Header;
