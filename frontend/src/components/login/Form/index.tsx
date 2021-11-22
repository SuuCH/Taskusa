import { useEffect, useState } from "react";
import type { VFC, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import styles from "./index.module.css";
import loginWithEmail from "../../../api/authentication/loginWithEmail";
import { BaseButton } from "../../utils/BaseButton";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../api/firebase";

const Form: VFC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnClickLoginButton = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginWithEmail(email, password);
    console.log(email, password);
  };

  const handleChangeEmail = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.currentTarget.value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user && navigate("/top");
    });
  }, [navigate]);

  return (
    <>
      <form
        autoComplete="off"
        className={styles.form}
        noValidate
        onSubmit={handleOnClickLoginButton}
      >
        <TextField
          className={styles.textForm}
          name="email"
          type="email"
          label="E-mail"
          variant="outlined"
          style={{ backgroundColor: "white", margin: "25px 25px 0 25px" }}
          onChange={(event) => handleChangeEmail(event)}
        />
        <TextField
          autoComplete="current-password"
          className={styles.textForm}
          name="password"
          label="Password"
          variant="outlined"
          style={{ backgroundColor: "white", margin: "25px 25px 0 25px" }}
          type="password"
          onChange={(event) => handleChangePassword(event)}
        />
        <div className={styles.buttonArea}>
          <BaseButton
            className={styles.button}
            text="ログイン"
            color="#06681B"
          />
        </div>
      </form>
    </>
  );
};

export { Form };
