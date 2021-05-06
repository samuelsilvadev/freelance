import { SPACE_REGEX } from "utils/regexes";

import type { Props } from "./types";

import styles from "./progressBar.module.scss";

function buildId(value: string): string {
  return value.trim().replace(SPACE_REGEX, "-").toLowerCase();
}

function ProgressBar(props: Props): JSX.Element {
  const { label, value } = props;

  const id = buildId(label);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.progressWrapper}>
        <span
          aria-hidden
          className={styles.bar}
          style={{ left: `${value}%` }}
        />
        <p className={styles.value}>{value}%</p>
        <progress className={styles.progress} id={id} value={value} max={100}>
          {value}%
        </progress>
      </div>
    </div>
  );
}

export default ProgressBar;
