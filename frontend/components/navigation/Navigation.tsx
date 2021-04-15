import Link from "next/link";

import styles from "./navigation.module.scss";

type Props = {
  isOpen: boolean;
};

export const MENU_ITEMS = [
  "home",
  "about",
  "services",
  "portfolio",
  "pricing",
  "experience",
];

const renderMenuItem = (item: string) => {
  return (
    <li className={styles.listItem} key={item}>
      <Link href={`#${item}`}>
        <a className={styles.link}>{item}</a>
      </Link>
    </li>
  );
};

function Navigation(props: Props): JSX.Element | null {
  const { isOpen } = props;

  return isOpen ? (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>{MENU_ITEMS.map(renderMenuItem)}</ul>
    </nav>
  ) : null;
}

export default Navigation;
