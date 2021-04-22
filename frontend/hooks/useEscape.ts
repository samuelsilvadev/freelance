import { useEffect } from "react";

function useEscape(callback: () => void): void {
  useEffect(() => {
    if (!callback) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export { useEscape };
