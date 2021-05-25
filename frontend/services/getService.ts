import fs from "fs";
import path from "path";
import { cwd } from "process";

import { END_POINTS } from "utils/endpoints";

import type { Service as ServiceType } from "types/api";

export async function getService(): Promise<ServiceType> {
  try {
    const response = await fetch(
      `${process.env.API_URL}/${END_POINTS.SERVICE}`
    );
    const services: ServiceType[] | undefined = await response.json();
    const [service] = services ?? [];

    return service;
  } catch {
    const serviceMockPath = path.join(cwd(), "data/service.json");
    const serviceContent = fs.readFileSync(serviceMockPath, {
      encoding: "utf-8",
    });
    const parsedServiceContent = JSON.parse(serviceContent);

    return parsedServiceContent;
  }
}
