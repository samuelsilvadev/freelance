import Link from "next/link";

import styles from "./navigation.module.scss";

const MENU_ITEMS = [
  "home",
  "about",
  "services",
  "portfolio",
  "pricing",
  "experience",
];

function Navigation(): JSX.Element {
  const renderMenuItem = (item: string) => {
    return (
      <li className={styles.listItem} key={item}>
        <Link href={`#${item}`}>
          <a className={styles.link}>{item}</a>
        </Link>
      </li>
    );
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>{MENU_ITEMS.map(renderMenuItem)}</ul>
    </nav>
  );
}

export default Navigation;
