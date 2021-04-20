import MatchMediaMock from "jest-matchmedia-mock";

export const matchMedia = new MatchMediaMock();

const BREAKPOINTS = {
  small: "(min-width: 768px)",
  medium: "(min-width: 1024px)",
  large: "(min-width: 1440px)",
};

export function setBreakpoint(breakpoint: keyof typeof BREAKPOINTS): void {
  matchMedia.useMediaQuery(BREAKPOINTS[breakpoint]);
}
