import { render, screen } from "@testing-library/react";

import ProgressBar from "../ProgressBar";

describe("<ProgressBar />", () => {
  it("should render component correctly", () => {
    render(<ProgressBar value={85} label="Amount of water" />);

    const progress = screen.getByLabelText("Amount of water");

    expect(progress).toBeVisible();
    expect(progress).toHaveValue(85);
  });
});
