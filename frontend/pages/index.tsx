import Header from "components/header";
import Hero from "components/hero";

import styles from "styles/pages/index.module.scss";

const IndexPage = (): JSX.Element => (
  <>
    <div className={styles.clip}>
      <Header />
      <Hero />
    </div>
  </>
);

export default IndexPage;
