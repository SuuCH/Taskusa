/* https://projects.lukehaas.me/css-loaders/ */

import type { VFC } from "react";

import styles from "./index.module.css";

const LoadingLayout: VFC = () => {
  return <div className={styles.loader} />;
};
export { LoadingLayout };
