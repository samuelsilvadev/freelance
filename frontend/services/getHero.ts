import fs from "fs";
import path from "path";
import { cwd } from "process";

import { END_POINTS } from "utils/endpoints";

import type { Hero as HeroType } from "types/api";

export async function getHero(): Promise<HeroType> {
  try {
    const response = await fetch(`${process.env.API_URL}/${END_POINTS.HERO}`);
    const heroes: HeroType[] | undefined = await response.json();
    const [hero] = heroes ?? [];

    return hero;
  } catch {
    const heroMockPath = path.join(cwd(), "data/hero.json");
    const heroContent = fs.readFileSync(heroMockPath, { encoding: "utf-8" });
    const parsedHeroContent = JSON.parse(heroContent);

    return parsedHeroContent;
  }
}
