import { useRef } from "react";
import BackToTop from "@small-components/back-to-top";

import type { GetStaticPropsResult } from "next";

import Header from "components/header";
import Hero from "components/hero";
import About from "components/about";
import Services from "components/services";
import Portfolio from "components/portfolio";

import type { Props as HeroProps } from "components/hero/types";
import type { Props as AboutProps } from "components/about/types";
import type { Props as ServiceProps } from "components/services/types";
import type { PictureItem } from "types/api";
import type { Props as PortfolioProps } from "components/portfolio/types";

import { getHero } from "services/getHero";
import { getAbout } from "services/getAbout";
import { getService } from "services/getService";
import { getPortfolio } from "services/getPortfolio";

import styles from "styles/pages/index.module.scss";
import "@small-components/back-to-top/dist/main.css";

interface Props {
  hero: HeroProps;
  about: AboutProps;
  service: ServiceProps;
  portfolio: PortfolioProps;
}

const IndexPage = (props: Props): JSX.Element => {
  const servicesRef = useRef<HTMLElement>(null);

  return (
    <>
      <div id="home" className={styles.clip}>
        <Header />
        <Hero {...props.hero} />
      </div>
      <About id="about" {...props.about} />
      <Services id="services" ref={servicesRef} {...props.service} />
      <Portfolio id="portfolio" {...props.portfolio} />
      <BackToTop alwaysVisible={false} showAfterRef={servicesRef} />
    </>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const [hero, about, service, portfolio] = await Promise.all([
    getHero(),
    getAbout(),
    getService(),
    getPortfolio(),
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
        items: prependPublicAssetsUrl(getOnlyFilledItems(service.Item)),
      },
      portfolio: {
        title: portfolio.title,
        subtitle: portfolio.subtitle,
      },
    },
  };
}

function getOnlyFilledItems(items: PictureItem[]) {
  return items.filter((item) => item.title && item.description);
}

function prependPublicAssetsUrl(items: PictureItem[]): PictureItem[] {
  return items.map((item) => ({
    ...item,
    media: item.media?.map((media) => ({
      ...media,
      url: `${process.env.NEXT_PUBLIC_ASSETS_URL}${media.url}`,
    })),
  }));
}

export default IndexPage;
