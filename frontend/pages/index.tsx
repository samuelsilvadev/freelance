import type { GetStaticPropsResult } from "next";

import Header from "components/header";
import Hero from "components/hero";
import About from "components/about";
import Services from "components/services";

import type { Props as HeroProps } from "components/hero/types";
import type { Props as AboutProps } from "components/about/types";
import type { Props as ServiceProps } from "components/services/types";
import type { ServiceItem } from "types/api";

import { getHero } from "services/getHero";
import { getAbout } from "services/getAbout";
import { getService } from "services/getService";

import styles from "styles/pages/index.module.scss";

interface Props {
  hero: HeroProps;
  about: AboutProps;
  service: ServiceProps;
}

const IndexPage = (props: Props): JSX.Element => (
  <>
    <div className={styles.clip}>
      <Header />
      <Hero {...props.hero} />
    </div>
    <About {...props.about} />
    <Services {...props.service} />
  </>
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const [hero, about, service] = await Promise.all([
    getHero(),
    getAbout(),
    getService(),
  ]);

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
      service: {
        title: service.title,
        subtitle: service.subtitle,
        items: getOnlyFilledItems(service.Item),
      },
    },
  };
}

function getOnlyFilledItems(items: ServiceItem[]) {
  return items.filter((item) => item.title && item.description);
}

export default IndexPage;
