import { render, screen } from "@testing-library/react";

import Hero, { TRANSLATIONS } from "../Hero";

describe("<Hero />", () => {
  it("should render all elements correctly", () => {
    render(<Hero />);

    expect(screen.getByText(TRANSLATIONS.TITLE_PART_1)).toBeVisible();
    expect(screen.getByText(TRANSLATIONS.SUBTITLE)).toBeVisible();
    expect(screen.getByText(TRANSLATIONS.TEXT)).toBeVisible();
    expect(screen.getByAltText(TRANSLATIONS.IMAGE_ALT)).toBeVisible();
  });
});
