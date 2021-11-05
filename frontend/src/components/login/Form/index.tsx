import type { VFC } from "react";
import { TextField } from "@material-ui/core";
import styles from "./index.module.css";

const Form: VFC = () => {
  return (
    <>
      <form autoComplete="off" className={styles.form} noValidate>
        <TextField
          className={styles.textForm}
          id="standard-basic"
          label="E-mail"
          style={{ backgroundColor: "white", margin: "25px 25px 0 25px" }}
        />
        <TextField
          autoComplete="current-password"
          className={styles.textForm}
          id="standard-password-input"
          label="Password"
          style={{ backgroundColor: "white", margin: "25px 25px 0 25px" }}
          type="password"
        />
      </form>
    </>
  );
};

export { Form };
