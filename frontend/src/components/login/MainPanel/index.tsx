import { ReactNode, VFC } from "react";
import styles from "./index.module.css";

interface Props {
  children?: ReactNode;
}

const MainPanel: VFC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.panel}>
        {children}
      </div>
    </>
  );
};
export { MainPanel };
