import { Form } from "../../components/login/Form";
import { MainPanel } from "../../components/login/MainPanel";
import type { VFC } from "react";
import styles from "./index.module.css";
import LogoTaskusa from "../../images/LogoTaskusaNotMargin.png";
import { Footer } from "../../components/utils/Footer";

const Login: VFC = () => {
  return (
    <>
      <div className={styles.panel}>
        <MainPanel>
          <div className={styles.imageArea}>
            <img className={styles.image} src={LogoTaskusa} alt="logo" />
          </div>
          <Form />
        </MainPanel>
      </div>
      <Footer />
    </>
  );
};

export { Login };
