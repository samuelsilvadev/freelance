import { useEffect, useRef, useState } from "react";

import Navigation from "components/navigation";
import Logo from "components/icons/logo";
import { useEscape } from "hooks/useEscape";

import styles from "./header.module.scss";

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
        <button className={styles.toggle} onClick={handleToggle}>
          {!isNavigationOpen ? "open" : "close"}
        </button>
      )}
      <Navigation isOpen={isNavigationOpen || isGteMedium} />
    </header>
  );
}

export default Header;
