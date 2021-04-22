import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { useEscape } from "../useEscape";

describe("useEscape", () => {
  it("should call callback if `Escape` is pressed", () => {
    const callback = jest.fn();

    renderHook(() => useEscape(callback));

    fireEvent.keyDown(document, { key: "Escape" });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call callback if `Shift` is pressed", () => {
    const callback = jest.fn();

    renderHook(() => useEscape(callback));

    fireEvent.keyDown(document, { key: "Shift" });

    expect(callback).not.toHaveBeenCalled();
  });
});
