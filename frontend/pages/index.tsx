import type { GetStaticPropsResult } from "next";

import Header from "components/header";
import Hero from "components/hero";
import About from "components/about";

import type { Props as HeroProps } from "components/hero/types";
import type { Props as AboutProps } from "components/about/types";

import styles from "styles/pages/index.module.scss";
import { getHero } from "services/getHero";
import { getAbout } from "services/getAbout";

interface Props {
  hero: HeroProps;
  about: AboutProps;
}

const IndexPage = (props: Props): JSX.Element => (
  <>
    <div className={styles.clip}>
      <Header />
      <Hero {...props.hero} />
    </div>
    <About {...props.about} />
  </>
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const [hero, about] = await Promise.all([getHero(), getAbout()]);

  return {
    props: {
      hero: {
        title: hero.title,
        name: hero.professional_name,
        details: hero.profession_details,
        description: hero.description,
      },
      about: {
        title: about.title,
        subtitle: about.subtitle,
        content: about.content,
        alternativeText: about.image_alternative_text,
        skills: about.Skill,
      },
    },
  };
}

export default IndexPage;
