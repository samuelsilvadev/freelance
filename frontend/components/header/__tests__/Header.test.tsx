import { fireEvent, render, screen } from "@testing-library/react";
import { setBreakpoint } from "utils/tests/match-media";

import { MENU_ITEMS } from "components/navigation/Navigation";
import Header from "../Header";

describe("<Header />", () => {
  it("should render all components correctly in mobile", () => {
    setBreakpoint("small");

    render(<Header />);

    expect(screen.getByLabelText("Freelancer")).toBeVisible();
    expect(screen.getByText("open")).toBeVisible();
  });

  it("should open the navigation", () => {
    setBreakpoint("small");

    render(<Header />);

    const openButton = screen.getByText("open");

    fireEvent.click(openButton);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).toBeVisible();
    });
  });

  it("should close the navigation", () => {
    setBreakpoint("small");

    render(<Header />);

    const openButton = screen.getByText("open");

    fireEvent.click(openButton);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).toBeVisible();
    });

    const closeButton = screen.getByText("close");

    fireEvent.click(closeButton);

    MENU_ITEMS.forEach((menuItem) => {
      expect(screen.queryByText(menuItem)).not.toBeInTheDocument();
    });
  });

  it("should close the navigation if the user press escape", async () => {
    setBreakpoint("small");

    render(<Header />);

    let openButton: HTMLElement | null = screen.getByText("open");

    fireEvent.click(openButton);

    const closeButton = screen.getByText("close");
    openButton = screen.queryByText("open");

    expect(closeButton).toBeVisible();
    expect(openButton).not.toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    openButton = screen.getByText("open");

    expect(openButton).toBeVisible();
  });

  it("should render all components correctly in medium", () => {
    setBreakpoint("medium");

    render(<Header />);

    expect(screen.getByLabelText("Freelancer")).toBeVisible();
    expect(screen.queryByText("open")).not.toBeInTheDocument();
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
