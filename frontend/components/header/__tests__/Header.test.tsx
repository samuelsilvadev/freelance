import { fireEvent, render, screen } from "@testing-library/react";
import { setBreakpoint } from "utils/tests/match-media";

import { MENU_ITEMS } from "components/navigation/Navigation";
import Header, { TRANSLATIONS } from "../Header";

describe("<Header />", () => {
  it("should render all components correctly in mobile", () => {
    setBreakpoint("small");

    render(<Header />);

    expect(screen.getByLabelText("Freelancer")).toBeVisible();
    expect(screen.getByLabelText(TRANSLATIONS.OPEN_NAVIGATION)).toBeVisible();
  });

  it("should open the navigation", () => {
    setBreakpoint("small");

    render(<Header />);

    const openButton = screen.getByLabelText(TRANSLATIONS.OPEN_NAVIGATION);

    fireEvent.click(openButton);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).toBeVisible();
    });
  });

  it("should close the navigation", () => {
    setBreakpoint("small");

    render(<Header />);

    const openButton = screen.getByLabelText(TRANSLATIONS.OPEN_NAVIGATION);

    fireEvent.click(openButton);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).toBeVisible();
    });

    const closeButton = screen.getByLabelText(TRANSLATIONS.CLOSE_NAVIGATION);

    fireEvent.click(closeButton);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).not.toBeInTheDocument();
    });
  });

  it("should close the navigation if the user press escape", async () => {
    setBreakpoint("small");

    render(<Header />);

    let openButton: HTMLElement | null = screen.getByLabelText(
      TRANSLATIONS.OPEN_NAVIGATION
    );

    fireEvent.click(openButton);

    const closeButton = screen.getByLabelText(TRANSLATIONS.CLOSE_NAVIGATION);
    openButton = screen.queryByLabelText(TRANSLATIONS.OPEN_NAVIGATION);

    expect(closeButton).toBeVisible();
    expect(openButton).not.toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    openButton = screen.getByLabelText(TRANSLATIONS.OPEN_NAVIGATION);

    expect(openButton).toBeVisible();
  });

  it("should render all components correctly in medium", () => {
    setBreakpoint("medium");

    render(<Header />);

    expect(screen.getByLabelText("Freelancer")).toBeVisible();
    expect(
      screen.queryByLabelText(TRANSLATIONS.OPEN_NAVIGATION)
    ).not.toBeInTheDocument();
  });

  it("should not hide navigation if user press escape in medium", () => {
    setBreakpoint("medium");

    render(<Header />);

    fireEvent.keyDown(document, { key: "Escape" });

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).toBeVisible();
    });
  });
});
