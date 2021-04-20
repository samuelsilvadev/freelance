import { render, screen } from "@testing-library/react";

import Navigation, { MENU_ITEMS } from "../Navigation";

describe("<Navigation />", () => {
  it("should render all items correctly", () => {
    render(<Navigation isOpen />);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.getByText(menuItem)).toBeVisible();
    });
  });

  it("should not render if it's closed", () => {
    render(<Navigation />);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).not.toBeInTheDocument();
    });
  });
});
