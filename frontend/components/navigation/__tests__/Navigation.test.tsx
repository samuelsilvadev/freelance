import { render, screen } from "@testing-library/react";

import Navigation, { MENU_ITEMS } from "../Navigation";

describe("Navigation", () => {
  it("should render all items correctly", () => {
    render(<Navigation />);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.getByText(menuItem)).toBeVisible();
    });
  });
});
