import fs from "fs";
import path from "path";
import { cwd } from "process";

import { END_POINTS } from "utils/endpoints";

import type { About as AboutType } from "types/api";

function getMockAbout() {
  const aboutMockPath = path.join(cwd(), "data/about.json");
  const aboutContent = fs.readFileSync(aboutMockPath, { encoding: "utf-8" });
  const parsedAboutContent = JSON.parse(aboutContent);

  return parsedAboutContent;
}

export async function getAbout(): Promise<AboutType> {
  try {
    const response = await fetch(`${process.env.API_URL}/${END_POINTS.ABOUT}`);
    const abouts: AboutType[] | undefined = await response.json();

    if (abouts?.[0]) {
      return abouts[0];
    }

    return getMockAbout();
  } catch {
    return getMockAbout();
  }
}
