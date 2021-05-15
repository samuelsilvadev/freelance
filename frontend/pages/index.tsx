import fs from "fs";
import path from "path";
import { cwd } from "process";

import type { GetStaticPropsResult } from "next";

import Header from "components/header";
import Hero from "components/hero";
import About from "components/about";

import { END_POINTS } from "utils/endpoints";

import type { Props as HeroProps } from "components/hero/types";
import type { Hero as HeroType } from "types/api";

import styles from "styles/pages/index.module.scss";

interface Props {
  hero: HeroProps;
}

const IndexPage = (props: Props): JSX.Element => (
  <>
    <div className={styles.clip}>
      <Header />
      <Hero {...props.hero} />
    </div>
    <About />
  </>
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  try {
    const response = await fetch(`${process.env.API_URL}/${END_POINTS.HERO}`);
    const heroes: HeroType[] | undefined = await response.json();
    const [hero] = heroes ?? [];

    return {
      props: {
        hero: {
          title: hero.title,
          name: hero.professional_name,
          details: hero.profession_details,
          description: hero.description,
        },
      },
    };
  } catch {
    const heroMockPath = path.join(cwd(), "data/hero.json");
    const heroContent = fs.readFileSync(heroMockPath, { encoding: "utf-8" });
    const parsedHeroContent = JSON.parse(heroContent);

    return {
      props: {
        hero: parsedHeroContent,
      },
    };
  }
}

export default IndexPage;
