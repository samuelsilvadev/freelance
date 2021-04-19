function Logo(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg height={30} width={120} aria-hidden {...props}>
      <text
        fill="var(--secondary)"
        fontFamily="inherit"
        fontSize={22}
        fontWeight={700}
        x={0.291}
        y={23.447}
      >
        Free
        <tspan fill="var(--primary)">lancer</tspan>
      </text>
    </svg>
  );
}

export default Logo;
