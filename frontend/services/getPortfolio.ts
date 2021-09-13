import path from "path";
import fs from "fs";
import { cwd } from "process";

import { END_POINTS } from "utils/endpoints";

import type { Portfolio } from "types/api";

export async function getPortfolio(): Promise<Portfolio> {
  try {
    const response = await fetch(
      `${process.env.API_URL}/${END_POINTS.PORTFOLIO}`
    );
    const portfolios: Portfolio[] | undefined = await response.json();
    const portfolio = portfolios?.[0];

    if (!portfolio) {
      throw new Error("Portfolio API didn't return anything");
    }

    return portfolio;
  } catch {
    const portfolioMockPath = path.join(cwd(), "data/portfolio.json");
    const portfolioContent = fs.readFileSync(portfolioMockPath, {
      encoding: "utf-8",
    });
    const parsedPortfolioContent = JSON.parse(portfolioContent);

    return parsedPortfolioContent;
  }
}
