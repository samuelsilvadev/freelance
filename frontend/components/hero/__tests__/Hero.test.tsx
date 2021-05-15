import { render, screen } from "@testing-library/react";

import Hero, { TRANSLATIONS } from "../Hero";

describe("<Hero />", () => {
  it("should render all elements correctly", () => {
    const props = {
      title: "title",
      name: "name",
      details: "details",
      description: "description",
    };

    render(<Hero {...props} />);

    expect(screen.getByText(props.title)).toBeVisible();
    expect(screen.getByText(props.name)).toBeVisible();
    expect(screen.getByText(props.details)).toBeVisible();
    expect(screen.getByText(props.description)).toBeVisible();
    expect(screen.getByAltText(TRANSLATIONS.IMAGE_ALT)).toBeVisible();
  });
});
