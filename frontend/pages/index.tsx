import Header from "components/header";
import Hero from "components/hero";
import About from "components/about";

import styles from "styles/pages/index.module.scss";

const IndexPage = (): JSX.Element => (
  <>
    <div className={styles.clip}>
      <Header />
      <Hero />
    </div>
    <About />
  </>
);

export default IndexPage;
