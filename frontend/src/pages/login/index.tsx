import { BaseButton } from "../../components/utils/BaseButton";
import { Form } from "../../components/login/Form";
import { MainPanel } from "../../components/login/MainPanel";
import type { VFC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import LogoTaskusa from "../../images/LogoTaskusaNotMargin.png";
import { Footer } from "../../components/utils/Footer";

const Login: VFC = () => {
  const navigate = useNavigate();

  const handleOnClickLoginButton = (): void => {
    console.log("push");
    navigate("/top");
  };
  return (
    <>
      <div className={styles.panel}>
        <MainPanel>
          <div className={styles.imageArea}>
            <img className={styles.image} src={LogoTaskusa} alt="logo" />
          </div>
          <Form />
          <div className={styles.buttonArea}>
            <BaseButton
              className={styles.button}
              text="ログイン"
              color="#06681B"
              onClick={handleOnClickLoginButton}
            />
          </div>
        </MainPanel>
      </div>
      <Footer />
    </>
  );
};

export { Login };
