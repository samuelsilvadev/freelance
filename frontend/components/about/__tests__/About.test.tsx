import { render, screen } from "@testing-library/react";

import About from "../About";

import type { Props } from "../types";

describe("<About>", () => {
  it("should render all elements correctly", () => {
    const props: Props = {
      title: "About",
      subtitle: "Why You Hire Me?",
      content: "content",
      alternativeText: "alternativeText",
      skills: [{ id: 1, label: "UI", value: "100" }],
    };

    render(<About {...props} />);

    expect(screen.getByText(props.title)).toBeVisible();
    expect(screen.getByText(props.subtitle)).toBeVisible();
    expect(screen.getByText(props.content)).toBeVisible();
    expect(screen.getByAltText(props.alternativeText)).toBeVisible();
    expect(screen.getByLabelText("UI")).toBeVisible();
  });
});
