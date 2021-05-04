import { render, screen } from "@testing-library/react";

import About, { TRANSLATIONS } from "../About";

describe("<About>", () => {
  it("should render all elements correctly", () => {
    render(<About />);

    expect(screen.getByText(TRANSLATIONS.TITLE)).toBeVisible();
    expect(screen.getByText(TRANSLATIONS.SUBTITLE)).toBeVisible();
    expect(screen.getByText(TRANSLATIONS.CONTENT)).toBeVisible();
    expect(screen.getByAltText(TRANSLATIONS.IMAGE_ALT)).toBeVisible();
  });
});
