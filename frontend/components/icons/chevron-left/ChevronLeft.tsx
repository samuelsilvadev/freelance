import React from "react";

function ChevronLeft(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export default ChevronLeft;
